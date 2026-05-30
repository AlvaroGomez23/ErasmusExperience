#!/usr/bin/env node
/**
 * Usage:
 *   node utils/convert-upload.mjs --week 2 --input ./utils/photos/week02
 *   node utils/convert-upload.mjs --week 2 --input ./utils/photos/week02 --no-upload
 *
 * Converts all images in <input> to webp@75%, renames to week02-01.webp etc.,
 * saves to utils/output/week02/, then uploads to Supabase bucket "Photos/week02/".
 */

import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp', '.heic', '.heif']);

function loadEnv() {
  const text = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
  const env = {};
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*(\w+)\s*=\s*"?([^"\n]*)"?\s*$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { week: null, input: null, upload: true };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--week')       opts.week   = parseInt(args[++i]);
    else if (args[i] === '--input') opts.input  = args[++i];
    else if (args[i] === '--no-upload') opts.upload = false;
  }
  return opts;
}

async function main() {
  const opts = parseArgs();

  if (!opts.week || !opts.input) {
    console.error('Usage: node utils/convert-upload.mjs --week <N> --input <folder> [--no-upload]');
    process.exit(1);
  }

  const weekStr  = String(opts.week).padStart(2, '0');
  const inputDir = path.resolve(opts.input);
  const outputDir = path.join(ROOT, 'utils', 'output', `week${weekStr}`);

  if (!fs.existsSync(inputDir)) {
    console.error(`Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(inputDir)
    .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
    .sort();

  if (files.length === 0) {
    console.error(`No images found in ${inputDir}`);
    process.exit(1);
  }

  console.log(`\nWeek ${weekStr} — converting ${files.length} image(s)...\n`);

  const converted = [];
  for (let i = 0; i < files.length; i++) {
    const num     = String(i + 1).padStart(2, '0');
    const outName = `week${weekStr}-${num}.webp`;
    const outPath = path.join(outputDir, outName);

    await sharp(path.join(inputDir, files[i]))
      .webp({ quality: 75 })
      .toFile(outPath);

    const size = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`  ✓  ${files[i].padEnd(30)} →  ${outName}  (${size} KB)`);
    converted.push({ name: outName, path: outPath });
  }

  console.log(`\nOutput: ${outputDir}`);

  if (!opts.upload) {
    console.log('Skipping upload (--no-upload).\n');
    return;
  }

  const env      = loadEnv();
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
  const folder   = `week${weekStr}`;

  console.log(`\nUploading to Supabase → Photos/${folder}/\n`);

  let ok = 0, fail = 0;
  for (const file of converted) {
    const buffer = fs.readFileSync(file.path);
    const { error } = await supabase.storage
      .from('Photos')
      .upload(`${folder}/${file.name}`, buffer, { contentType: 'image/webp', upsert: true });

    if (error) {
      console.error(`  ✗  ${file.name}: ${error.message}`);
      fail++;
    } else {
      console.log(`  ↑  ${file.name}`);
      ok++;
    }
  }

  console.log(`\n${ok} uploaded${fail ? `, ${fail} failed` : ''}. Done!\n`);
}

main().catch(err => { console.error(err); process.exit(1); });
