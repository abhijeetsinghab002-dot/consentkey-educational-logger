# ConsentKey — Educational Keyboard Event Logger

ConsentKey demonstrates keyboard events, local logging, and ethical constraints in security tooling. It records key names **only** while the user has explicitly started a session and the training box is focused.

## Safety boundaries

- Visible start/stop status and affirmative consent are mandatory.
- It does not install a system hook or read operating-system input devices.
- It cannot record from other applications, browser tabs, password inputs, or the background.
- The server listens only on `127.0.0.1`; logs are never transmitted externally.
- The local JSONL log is created with owner-only permissions where the OS supports them.
- Logs can be viewed and permanently cleared from the interface.

## Run

1. Install Node.js 18 or newer.
2. Open Command Prompt inside this folder.
3. Run `npm test`.
4. Run `npm start`.
5. Visit `http://127.0.0.1:3001`.

No external packages are required.

## Learning outcomes

- `keydown` and `keyup` browser events
- Explicit consent and limited collection scope
- JSON Lines (`.jsonl`) audit logging
- Local-only HTTP services
- Input validation, size limits, and safe log viewing

Use only on your own device and with informed consent. This project intentionally excludes stealth, persistence, system-wide capture, credential collection, remote transmission, and evasion.
