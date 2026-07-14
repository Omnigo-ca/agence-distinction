import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const mediaRoot = path.join(root, "public", "images", "agence-distinction")

const jobs = [
  {
    rel: "agence-distinction-promo-01-ed.mp4",
    args: "-an -crf 28 -maxrate 1200k -bufsize 2400k -vf scale='min(1920,iw)':-2",
  },
  {
    rel: "saint-jean-moment.mp4",
    args: "-an -crf 28 -maxrate 1500k -bufsize 3000k -vf scale='min(720,iw)':-2",
  },
  {
    rel: "derniers-moments.mp4",
    args: "-an -crf 28 -maxrate 1500k -bufsize 3000k -vf scale='min(720,iw)':-2",
  },
  {
    rel: path.join("Mélane et Michel", "VID_20230125_201115.mp4"),
    args: "-c:a aac -b:a 96k -crf 28 -maxrate 2500k -bufsize 5000k -vf scale='min(1920,iw)':-2",
  },
  {
    rel: path.join("Mélane et Michel", "VID_20230126_194016.mp4"),
    args: "-c:a aac -b:a 96k -crf 28 -maxrate 2500k -bufsize 5000k -vf scale='min(1920,iw)':-2",
  },
  {
    rel: path.join("Mélane et Michel", "VID_20230125_184445.mp4"),
    args: "-c:a aac -b:a 96k -crf 28 -maxrate 2500k -bufsize 5000k -vf scale='min(1920,iw)':-2",
  },
]

const common =
  "-y -c:v libx264 -preset medium -profile:v main -pix_fmt yuv420p -movflags +faststart"

function mb(file) {
  return (fs.statSync(file).size / (1024 * 1024)).toFixed(2)
}

for (const job of jobs) {
  const input = path.join(mediaRoot, job.rel)
  const temp = `${input}.compressed.tmp.mp4`

  if (!fs.existsSync(input)) {
    console.warn(`SKIP missing: ${job.rel}`)
    continue
  }

  console.log(`\nCompressing ${job.rel} (${mb(input)} MB)...`)
  execSync(`ffmpeg -i "${input}" ${common} ${job.args} "${temp}"`, {
    stdio: "inherit",
  })

  fs.renameSync(temp, input)
  console.log(`Done: ${job.rel} → ${mb(input)} MB`)
}
