# What Kind of Practitioner Are You?

Personality quiz for accountants and bookkeepers, from [Aqqrue](https://whoareyou.aqqrue.com), served at [survey.aqqrue.ai](https://survey.aqqrue.ai).

Built for booth lead capture at accounting conferences.

## Run locally

```bash
node serve.js
```

Then open http://127.0.0.1:43123

Override the port with `PORT=8080 node serve.js`.

## Booth flow

1. Landing → required **Name** and **Email ID**
2. Quiz (10 questions)
3. Results → **Email me** queues their archetype to the Google Sheet (and can send Gmail if you deploy the Apps Script snippet in `index.html`)

## Aggregate counts

The results histogram is seeded at **10,248** completions, keeping the same archetype mix as before (Engine heaviest, Compass lightest). Devices that still have the old ~1,400 seed in localStorage are migrated up automatically.
