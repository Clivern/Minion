NPM ?= npm
NG ?= ng


help: Makefile
	@echo
	@echo " Choose a command run in Minion:"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo


## config: Install dependencies
config:
	$(NPM) install -g @angular/cli
	$(NPM) install


## version: List angular packages versions
version:
	$(NG) version


## test: Run lint and testing
test:
	$(NG) lint