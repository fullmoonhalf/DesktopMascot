# Windows setup and launch verification (Tauri)

This project uses a pnpm workspace. Run commands from the repository root:

```powershell
pnpm install
pnpm tauri dev
```

Verify the following in Windows:

1. A desktop window opens.
2. The React app renders (`Desktop Mascot` heading and placeholder text).
3. Hot reload works after editing `/apps/desktop/src/App.tsx`.

To verify production build output:

```powershell
pnpm tauri build
```

Confirm the build completes and Windows bundle artifacts are generated under:

`apps/desktop/src-tauri/target/release/bundle/`

## Notes

- If `pnpm tauri` is not recognized, ensure dependencies are installed at the repo root with `pnpm install`.
- This repository currently sets window title to `Desktop Mascot` in `/apps/desktop/src-tauri/tauri.conf.json`.
