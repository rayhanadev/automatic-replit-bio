# Automatic Replit Follower Bio :sparkles:

This is a Cloudflare Worker that runs a cron-job every minute to
refresh my Replit bio with my most recent follower. If you want
to use this project - assuming you've worked with Cloudflare Workers
before - simply create a new scheduled worker, add the code in [src/index.js](#src/index.js)
to the worker, and create an environment variable called `REPLIT_TOKEN`
with your connect.sid token in it :).

