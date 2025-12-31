export default {
  'pre-commit': 'pnpm lint-staged',
  "pre-push": "pnpm lint && pnpm typecheck && pnpm test.run"
};
