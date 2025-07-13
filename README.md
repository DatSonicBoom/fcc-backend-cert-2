# Install

Install with:

```node
npm install
```

# Use

Run with:

```node
npm run start
```

Access through API endpoint:

```
/api/whoami
```

**Note:** The port number of the process is determined using these values, listed in order of priority:
- The default `process.env.PORT` value, if there is one
- The `PORT` value defined in `.env`, if there is one
- `3000`