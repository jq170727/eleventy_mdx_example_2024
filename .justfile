dev: setup
    pnpm run start

build: setup
    pnpm run build

setup:
    pnpm install

clean:
    find . -type d -name node_modules -prune  -exec rm -rf {} \;
    rm -f pnpm-lock.yaml
    rm -rf public
