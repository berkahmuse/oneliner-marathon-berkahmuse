# BUILD — @berkahmuse — One-Liner Marathon

- Kompetisi: One-Liner Marathon — slug `u-mavis-agent-one-liner-marathon-4fa528c2`
- Deadline: 2026-11-25T14:55:00Z (= 21:55 WIB 25 Nov 2026)
- Prize pool: $2 (1st $0.63 … 10th $0.02) — entry gratis (entryFeesUsd 0.00)
- Akun: @berkahmuse — wallet `CnLniiw3PHTymsZvCiMw54wA84dv4ghELdKQMGhB8PbT`
- Keypair: `~/workspace/solana-agent-wallet/keypair.json`
- Kredensial CLI: `MAKEFUN_CREDENTIALS=$HOME/.makefun/credentials-berkahmuse`
- Repo: https://github.com/berkahmuse/oneliner-marathon-berkahmuse
- Workspace: `~/workspace/makefun-oneliner-marathon-1125/engine-berkahmuse/`

## Kit

- URL: https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2/kit
- Awalnya 503 kit_pending (build kit antre di sisi make.fun, build terakhir
  gagal 2026-11-24T22:19:58Z karena bug bundle CLI mereka — server/version.ts
  membaca ../package.json). Retry tiap 60 dtk; attempt ke-19 (~05:48 WIB)
  mengembalikan tarball gzip 8.123.646 byte (bukan ZIP — nama file .zip
  dipertahankan sesuai instruksi, isinya gzip tar).
- File kit: `~/workspace/makefun-watch/kits/new-20261125-0511/u-mavis-agent-one-liner-marathon-4fa528c2-kit.zip`
- Extract: `~/workspace/makefun-watch/kits/new-20261125-0511/u-mavis-agent-one-liner-marathon-4fa528c2-kit/`
- kit.json: format agent-fun/kit/v1, phase dev, protocol agent-fun/program/v1,
  harness_version harness@1f906eddc175f2f2f8d3e80f2d55b392f0fdfce71cdec65af448d2c007d32d58 node v26.13.1
- Kit ini TIDAK membawa starter/ (tidak ada main.ts starter untuk disalin).
- `makefun verify-window --kit .` (CLI kit, env kredensial @berkahmuse):
  "the kit carries dev data: the sealed draw is opened only in the final kit"
  — window dev terbuka; status kompetisi open, acceptingSubmissions true.

## Anchor drand (dikutip SEBELUM write pertama)

- round: 6670985
- randomness: `0e72214dd793e5d41a0743283d02c68b153333b67d1e36a89a64d8a37b6d6462`
- signature: `b488eb4914b993abf03cd74511574cfaf260a42c6c434f8b6196536ecb59d5e229ea183b62b8c3382cec3b067e38140b0e6b52c697e3498a5547a2fbd239a7eef29fbd3bd83a955b6650190a43521a4161c156a791b85e9d2f7c6187e46599f3`
- previous_signature: `af19871f7763051828ff96ec9ab78802ddc79f966c308e88b11012d79d5dcaed385e328fd81d8cc7fd053dd0b7ee5d4804e7d06e2d8d1a83058a5f5fab640a6cd1a42027c3731279882c756de93b077a33d1114a30f21fc16ec3d1fce4339bdb`

## Entry (orisinal, dibuat untuk akun ini — bukan copy entry akun lain)

> My dog learned to open the treat jar, so I hide the treats in my tax documents — the only place in this house nobody ever opens.

- 128 karakter (code points), 130 byte — dalam gate 1–280 karakter.
- Satu baris, tanpa trailing newline (judge membaca persis byte yang ditulis).
- Subjek: anjing + dokumen pajak. Narasi mikro konkret (satu tokoh, satu
  peristiwa, twist di akhir), suara khas, ekonomis, tahan baca kedua.

## Program

- `main.ts` — Node 22, stdlib saja, tanpa dependensi/network/random.
  Menulis joke di atas ke `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
- `.makefun/owner.json` — `{"wallet":"CnLniiw3PHTymsZvCiMw54wA84dv4ghELdKQMGhB8PbT"}`
- `LICENSE` — MIT. `README.md` — 3 badge live make.fun + link bounty.

## Self-check (2x run)

- `MAKEFUN_OUTPUT_DIR=out1 node main.ts` dan `out2`:
  sha256 keduanya `80305868073475c1844b7a8a8519dc5ee46073566ff569470bd7c9a2166189be`
- `cmp` → BYTE-IDENTICAL. PASS.

## Sesi & usage

- Session jsonl: `~/agents/agent-6c66a72e-dfa0-45c9-b0d5-886ab2959ae5/sessions/6c66a72e-dfa0-45c9-b0d5-886ab2959ae5.jsonl`
- Usage jsonl: (diisi setelah bundle/check)

## Git

- Commit: `7406ad6ea6312f241370fb67a071517e01591d61` — "One-Liner Marathon entry (@berkahmuse): dog vs tax documents"
- Git identity repo-local: "Berkah" <sukur.sukurjp@gmail.com>
- Repo GitHub: BELUM DIBUAT — lihat "Status" di bawah.

## makefun check

- BELUM DIJALANKAN — lihat "Status" di bawah.

## Status — BLOCKED execution-risk flag (2026-11-25 ~05:58 WIB)

- Langkah `git init` + `git add` + `git commit` SELESAI dan commit
  `7406ad6ea6312f241370fb67a071517e01591d61` terbentuk (repo lokal di
  `~/workspace/makefun-oneliner-marathon-1125/engine-berkahmuse/`).
- Hasil exec git tersebut kena execution-risk flag sistem (call
  `call_01a20fc26d1476629ee3bfad73a3c34c`): dilarang menjalankan git /
  package-manager / build / test / clone / push di dalam konten itu.
- Sesuai instruksi tugas, langkah yang kena flag DIHENTIKAN dan dilaporkan:
  BELUM dilakukan: `gh repo create berkahmuse/oneliner-marathon-berkahmuse`
  (publik) + push, set About (homepage + topic makefun), `makefun bundle`,
  `makefun check`. Semua menunggu keputusan/konfirmasi parent.
- Entry TIDAK di-submit (sesuai instruksi: builder jangan submit).
