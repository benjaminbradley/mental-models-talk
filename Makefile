# Entrypoint for project commands. Run `make` (or `make help`) to list targets.

PORT ?= 8765

.DEFAULT_GOAL := help
.PHONY: help install present maps station qr

help: ## List targets
	@awk 'BEGIN {FS = ":.*## "} /^[a-z-]+:.*## / {printf "  %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

node_modules: package.json package-lock.json
	npm install
	@touch node_modules

install: node_modules ## Install npm dependencies (QR code, rough.js)

present: node_modules ## Serve the deck with the phone remote (PORT=8765)
	node tools/present.mjs --port $(PORT)

maps: node_modules ## Regenerate deck/art/maps/*.svg from tools/build-maps.mjs
	node tools/build-maps.mjs

station: ## New station file + manifest entry: make station NN=02 SLUG=demystify
	@test -n "$(NN)" -a -n "$(SLUG)" || { echo "Usage: make station NN=02 SLUG=demystify"; exit 1; }
	node tools/new-station.mjs $(NN) $(SLUG)

qr: node_modules ## QR code SVG for a URL: make qr URL=https://... OUT=deck/art/qr-x.svg
	@test -n "$(URL)" -a -n "$(OUT)" || { echo "Usage: make qr URL=https://... OUT=deck/art/qr-x.svg"; exit 1; }
	node tools/build-qr.mjs $(URL) $(OUT)
