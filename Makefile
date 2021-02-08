NPM ?= npm
NG ?= ng
NPX          ?= npx


help: Makefile
	@echo
	@echo " Choose a command run in Minion:"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo


## config: Install dependencies
.PHONY: config
config:
	@echo ">> ============= Config the Application ============= <<"
	$(NPM) install -g @angular/cli
	$(NPM) install


## version: List angular packages versions
.PHONY: version
version:
	$(NG) version


## test: Run lint and testing
.PHONY: test
test:
	@echo ">> ============= Test the Application ============= <<"
	$(NG) lint
	$(NPM) run build


## lint: Check code format
.PHONY: lint
lint:
	@echo ">> ============= Validate js format ============= <<"
	cd src;$(NPX) prettier  --check .


## format: Format code
.PHONY: format
format:
	@echo ">> ============= Format js Code ============= <<"
	cd src;$(NPX) prettier  --write .


## run: Run the application
.PHONY: run
run:
	@echo ">> ============= Run the Application ============= <<"
	$(NPM) start


## ci: Run sanity checks
.PHONY: ci
ci: test lint
	@echo "\n==> All quality checks passed"


.PHONY: help
