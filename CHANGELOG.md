# Changelog

## 0.3.0 (2025-11-16)

Full Changelog: [v0.2.1...v0.3.0](https://github.com/straddleio/straddle-node/compare/v0.2.1...v0.3.0)

### Features

* **api:** manual updates ([28df544](https://github.com/straddleio/straddle-node/commit/28df544e1683eefb8d9e53a3ce64a81afb29e1d4))
* **docs:** Preliminary update to SDK Spec ([4ecb0e7](https://github.com/straddleio/straddle-node/commit/4ecb0e75d1355a9879076bb4b6f89e4ab72db098))
* **mcp:** enable optional code execution tool on http mcp servers ([6d1e807](https://github.com/straddleio/straddle-node/commit/6d1e80794305120ed4ed363ce5d263d99d1c89ce))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([62d6cee](https://github.com/straddleio/straddle-node/commit/62d6cee004968941f54eddd3dc0141656a3cca4d))
* **mcp:** return tool execution error on jq failure ([b770626](https://github.com/straddleio/straddle-node/commit/b770626a61ce50b8edd495e37b5ca0e71d00fd0b))


### Chores

* extract some types in mcp docs ([dec7143](https://github.com/straddleio/straddle-node/commit/dec714360c4c6c202187694eb62f69f6f0336ae1))
* **internal:** codegen related update ([99b147e](https://github.com/straddleio/straddle-node/commit/99b147e5645a85f102afd54b325325bdfa094767))
* **internal:** codegen related update ([711d733](https://github.com/straddleio/straddle-node/commit/711d73369c5ee7b291dfffa53462bf0cffe2bd15))
* **internal:** configure MCP Server hosting ([9c6b542](https://github.com/straddleio/straddle-node/commit/9c6b542c366c9d396591ca3b4a2681488ba46a50))
* **internal:** grammar fix (it's -&gt; its) ([99e71e2](https://github.com/straddleio/straddle-node/commit/99e71e239ff4946f8ed58470172efda955e3fff2))
* mcp code tool explicit error message when missing a run function ([b0b8e0f](https://github.com/straddleio/straddle-node/commit/b0b8e0fab78b1505b789c7eb66964b0d3dea3ac6))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([bce78ee](https://github.com/straddleio/straddle-node/commit/bce78eecfaa21874fe26de4c9388429b7318a0af))
* **mcp:** add line numbers to code tool errors ([5584b4d](https://github.com/straddleio/straddle-node/commit/5584b4d34da5dde519bd7641690ff9dfa24173a4))
* **mcp:** clarify http auth error ([d1f31be](https://github.com/straddleio/straddle-node/commit/d1f31be6286799824f01a6a0ea8247fb715b3765))
* **mcp:** upgrade jq-web ([a7a3dd3](https://github.com/straddleio/straddle-node/commit/a7a3dd3b76920c8cd6de0b9977487ead01a8368e))
* use structured error when code execution tool errors ([96a31bb](https://github.com/straddleio/straddle-node/commit/96a31bb2067cc8c581ee447d8b75c4cae4add69b))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([430714d](https://github.com/straddleio/straddle-node/commit/430714d39f49ffb317b7e01501d798a6f019a335))
* **mcp:** add a README link to add server to VS Code or Claude Code ([718176d](https://github.com/straddleio/straddle-node/commit/718176d983930988b9cead14151f2227ae49857b))

## 0.2.1 (2025-10-08)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/straddleio/straddle-node/compare/v0.2.0...v0.2.1)

### Bug Fixes

* **api:** update default API URLs and metadata ([173b3d9](https://github.com/straddleio/straddle-node/commit/173b3d9779a87734e1ebd0b1c30361dd494d6177))


### Chores

* **internal:** use npm pack for build uploads ([97d8347](https://github.com/straddleio/straddle-node/commit/97d8347b5b6e32591d46be1ec3305a3602b2b17c))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([7b8c95f](https://github.com/straddleio/straddle-node/commit/7b8c95fa5ff3ee84c95c6fbcd19fefa47cdbf688))

## 0.2.0 (2025-10-01)

Full Changelog: [v2.0.0...v0.2.0](https://github.com/straddleio/straddle-node/compare/v2.0.0...v0.2.0)

### Features

* **api:** Fix Version for migration guide. ([203a4f0](https://github.com/straddleio/straddle-node/commit/203a4f0eea977f634c99ae565de310e5fd893723))

## 2.0.0 (2025-10-01)

Full Changelog: [v0.1.0...v2.0.0](https://github.com/straddleio/straddle-node/compare/v0.1.0...v2.0.0)

### Features

* Update to Typescript SDK ([814d49b](https://github.com/straddleio/straddle-node/commit/814d49bdf9d57549eb96aef763850e727085bd82))


### Chores

* sync repo ([45d783d](https://github.com/straddleio/straddle-node/commit/45d783d7f0500e1f29447ae157764e20107bad71))
* update SDK settings ([d7d4587](https://github.com/straddleio/straddle-node/commit/d7d458719b708dbd86f95684f98bbbc8dee56789))

## 0.1.0 (2025-01-29)

Full Changelog: [v0.1.0-alpha.3...v0.1.0](https://github.com/straddleio/straddle-node/compare/v0.1.0-alpha.3...v0.1.0)

### Features

* **api:** Add new endpoints ([#18](https://github.com/straddleio/straddle-node/issues/18)) ([2258de1](https://github.com/straddleio/straddle-node/commit/2258de19391535fb1a743fc362d259cff93e600e))
* **api:** api update ([#10](https://github.com/straddleio/straddle-node/issues/10)) ([876aacd](https://github.com/straddleio/straddle-node/commit/876aacdb9107eaf0f6ae51ecf56bcb3462628b4b))
* **api:** api update ([#8](https://github.com/straddleio/straddle-node/issues/8)) ([6b58484](https://github.com/straddleio/straddle-node/commit/6b58484b9213d76961c61d2d86d08138c0bcf771))
* **api:** Release Updates to SDK based on Open API Spec ([#16](https://github.com/straddleio/straddle-node/issues/16)) ([2550837](https://github.com/straddleio/straddle-node/commit/255083717789f19c79636c0c3fd9822ef81aca59))
* **api:** Release Updates to SDK based on Open API Spec ([#19](https://github.com/straddleio/straddle-node/issues/19)) ([a141983](https://github.com/straddleio/straddle-node/commit/a141983c5d1f55dab1de7caf1e6776864b11b90c))
* **api:** Release Updates to SDK based on Open API Spec ([#6](https://github.com/straddleio/straddle-node/issues/6)) ([0183598](https://github.com/straddleio/straddle-node/commit/0183598e73d369354a4af7602d79ca37b21a453b))
* **api:** Release Updates to SDK based on Open API Spec ([#9](https://github.com/straddleio/straddle-node/issues/9)) ([74ca00a](https://github.com/straddleio/straddle-node/commit/74ca00af6d7f50f55ba356b8620dc0d6f4786634))
* **api:** Remove current page number ([#4](https://github.com/straddleio/straddle-node/issues/4)) ([4fc6fbf](https://github.com/straddleio/straddle-node/commit/4fc6fbf36b154688b65944c2f4c48852cfffafd0))
* **api:** Update Config to add versioning to DTOs. Add Shared models to avoid duplication where possible. ([#21](https://github.com/straddleio/straddle-node/issues/21)) ([56691d7](https://github.com/straddleio/straddle-node/commit/56691d7dfdd9a4e590f57644afca278a309acfae))
* **api:** update via SDK Studio ([e87c059](https://github.com/straddleio/straddle-node/commit/e87c059506505be5b9bf7604543978df4649e231))
* **api:** update via SDK Studio ([40c19d0](https://github.com/straddleio/straddle-node/commit/40c19d0f7bf0c5671db37299be865421a1ef062b))
* **api:** update via SDK Studio ([3a92e99](https://github.com/straddleio/straddle-node/commit/3a92e992ffe4f3fc3e1602355b7f3143f829fee3))
* **api:** update via SDK Studio ([52f84d4](https://github.com/straddleio/straddle-node/commit/52f84d4bea26213a4b3e1917d98f52e45ceeb2e5))
* **api:** update via SDK Studio ([77444d5](https://github.com/straddleio/straddle-node/commit/77444d5be0418282bc950b66d20dba611147ac98))
* **api:** update via SDK Studio ([c7197b4](https://github.com/straddleio/straddle-node/commit/c7197b4f5bceef316ca57f88d8e5660385df3687))
* **api:** update via SDK Studio ([3203843](https://github.com/straddleio/straddle-node/commit/3203843822cf5ae79781ceb4bacb28f08fa483eb))
* **api:** update via SDK Studio ([d3f82ec](https://github.com/straddleio/straddle-node/commit/d3f82ecc00aab0e5232d9d3a8ab1882581bd5a16))
* **api:** update via SDK Studio ([c18af03](https://github.com/straddleio/straddle-node/commit/c18af039f82d934cc8684208fc937fbc39b8d8d5))
* **api:** update via SDK Studio ([cafd2a3](https://github.com/straddleio/straddle-node/commit/cafd2a3acbbc46cc8508ee4c24480130e58dc4fb))
* **api:** update via SDK Studio ([364d21b](https://github.com/straddleio/straddle-node/commit/364d21b0d0ce5b8b550fd5d78a758cb2c7e84149))
* **api:** update via SDK Studio ([08171f4](https://github.com/straddleio/straddle-node/commit/08171f4177ae1664a1a7625a4d33331e24663bb7))
* **api:** update via SDK Studio ([9adc47e](https://github.com/straddleio/straddle-node/commit/9adc47e808eb511df3d82c5ff795195d4bfa0aa4))
* **docs:** Preliminary update to SDK Spec ([#22](https://github.com/straddleio/straddle-node/issues/22)) ([ce41fe8](https://github.com/straddleio/straddle-node/commit/ce41fe8418669397d027e26dd6963088616cc14a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#20](https://github.com/straddleio/straddle-node/issues/20)) ([c1c37b5](https://github.com/straddleio/straddle-node/commit/c1c37b5f24ea6f72dbe2a0005bd0c1e5a5c2b5d0))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#23](https://github.com/straddleio/straddle-node/issues/23)) ([1caaa19](https://github.com/straddleio/straddle-node/commit/1caaa19eff9f619138adb11ac54a0e75008ecd42))
* **sdk:** Add unwrap response ([#13](https://github.com/straddleio/straddle-node/issues/13)) ([43fb290](https://github.com/straddleio/straddle-node/commit/43fb290ae02df54b62df034f2f540f2d2fc6c1a8))
* **sdk:** Remove wrapper ([#14](https://github.com/straddleio/straddle-node/issues/14)) ([75d64ad](https://github.com/straddleio/straddle-node/commit/75d64addebfde4ecfa668f6cd1c7d6884c408690))


### Bug Fixes

* **sdk:** Fix contact field ([#12](https://github.com/straddleio/straddle-node/issues/12)) ([4f7da68](https://github.com/straddleio/straddle-node/commit/4f7da68268ec606d9160519d30d31463037a9659))
* **sdk:** Fix Environment to point to correct URLs ([#11](https://github.com/straddleio/straddle-node/issues/11)) ([a719804](https://github.com/straddleio/straddle-node/commit/a719804419f16aeb9936202a8953e72faceb5156))


### Chores

* go live ([#1](https://github.com/straddleio/straddle-node/issues/1)) ([d8b0427](https://github.com/straddleio/straddle-node/commit/d8b042770d1e5cbf752cff13dba594541e0537ca))
* update SDK settings ([#3](https://github.com/straddleio/straddle-node/issues/3)) ([204b6e5](https://github.com/straddleio/straddle-node/commit/204b6e5028624353440436ef2b7aa6ae8b53173b))

## 0.1.0-alpha.3 (2025-01-29)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/straddleio/straddle-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** Add new endpoints ([#18](https://github.com/straddleio/straddle-node/issues/18)) ([2258de1](https://github.com/straddleio/straddle-node/commit/2258de19391535fb1a743fc362d259cff93e600e))
* **api:** Release Updates to SDK based on Open API Spec ([#16](https://github.com/straddleio/straddle-node/issues/16)) ([2550837](https://github.com/straddleio/straddle-node/commit/255083717789f19c79636c0c3fd9822ef81aca59))
* **api:** Release Updates to SDK based on Open API Spec ([#19](https://github.com/straddleio/straddle-node/issues/19)) ([a141983](https://github.com/straddleio/straddle-node/commit/a141983c5d1f55dab1de7caf1e6776864b11b90c))
* **api:** Update Config to add versioning to DTOs. Add Shared models to avoid duplication where possible. ([#21](https://github.com/straddleio/straddle-node/issues/21)) ([56691d7](https://github.com/straddleio/straddle-node/commit/56691d7dfdd9a4e590f57644afca278a309acfae))
* **docs:** Preliminary update to SDK Spec ([#22](https://github.com/straddleio/straddle-node/issues/22)) ([ce41fe8](https://github.com/straddleio/straddle-node/commit/ce41fe8418669397d027e26dd6963088616cc14a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#20](https://github.com/straddleio/straddle-node/issues/20)) ([c1c37b5](https://github.com/straddleio/straddle-node/commit/c1c37b5f24ea6f72dbe2a0005bd0c1e5a5c2b5d0))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#23](https://github.com/straddleio/straddle-node/issues/23)) ([1caaa19](https://github.com/straddleio/straddle-node/commit/1caaa19eff9f619138adb11ac54a0e75008ecd42))

## 0.1.0-alpha.2 (2025-01-28)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/straddleio/straddle-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** api update ([#10](https://github.com/straddleio/straddle-node/issues/10)) ([876aacd](https://github.com/straddleio/straddle-node/commit/876aacdb9107eaf0f6ae51ecf56bcb3462628b4b))
* **api:** api update ([#8](https://github.com/straddleio/straddle-node/issues/8)) ([6b58484](https://github.com/straddleio/straddle-node/commit/6b58484b9213d76961c61d2d86d08138c0bcf771))
* **api:** Release Updates to SDK based on Open API Spec ([#6](https://github.com/straddleio/straddle-node/issues/6)) ([0183598](https://github.com/straddleio/straddle-node/commit/0183598e73d369354a4af7602d79ca37b21a453b))
* **api:** Release Updates to SDK based on Open API Spec ([#9](https://github.com/straddleio/straddle-node/issues/9)) ([74ca00a](https://github.com/straddleio/straddle-node/commit/74ca00af6d7f50f55ba356b8620dc0d6f4786634))
* **sdk:** Add unwrap response ([#13](https://github.com/straddleio/straddle-node/issues/13)) ([43fb290](https://github.com/straddleio/straddle-node/commit/43fb290ae02df54b62df034f2f540f2d2fc6c1a8))
* **sdk:** Remove wrapper ([#14](https://github.com/straddleio/straddle-node/issues/14)) ([75d64ad](https://github.com/straddleio/straddle-node/commit/75d64addebfde4ecfa668f6cd1c7d6884c408690))


### Bug Fixes

* **sdk:** Fix contact field ([#12](https://github.com/straddleio/straddle-node/issues/12)) ([4f7da68](https://github.com/straddleio/straddle-node/commit/4f7da68268ec606d9160519d30d31463037a9659))
* **sdk:** Fix Environment to point to correct URLs ([#11](https://github.com/straddleio/straddle-node/issues/11)) ([a719804](https://github.com/straddleio/straddle-node/commit/a719804419f16aeb9936202a8953e72faceb5156))

## 0.1.0-alpha.1 (2025-01-27)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/straddleio/straddle-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** Remove current page number ([#4](https://github.com/straddleio/straddle-node/issues/4)) ([4fc6fbf](https://github.com/straddleio/straddle-node/commit/4fc6fbf36b154688b65944c2f4c48852cfffafd0))
* **api:** update via SDK Studio ([e87c059](https://github.com/straddleio/straddle-node/commit/e87c059506505be5b9bf7604543978df4649e231))
* **api:** update via SDK Studio ([40c19d0](https://github.com/straddleio/straddle-node/commit/40c19d0f7bf0c5671db37299be865421a1ef062b))
* **api:** update via SDK Studio ([3a92e99](https://github.com/straddleio/straddle-node/commit/3a92e992ffe4f3fc3e1602355b7f3143f829fee3))
* **api:** update via SDK Studio ([52f84d4](https://github.com/straddleio/straddle-node/commit/52f84d4bea26213a4b3e1917d98f52e45ceeb2e5))
* **api:** update via SDK Studio ([77444d5](https://github.com/straddleio/straddle-node/commit/77444d5be0418282bc950b66d20dba611147ac98))
* **api:** update via SDK Studio ([c7197b4](https://github.com/straddleio/straddle-node/commit/c7197b4f5bceef316ca57f88d8e5660385df3687))
* **api:** update via SDK Studio ([3203843](https://github.com/straddleio/straddle-node/commit/3203843822cf5ae79781ceb4bacb28f08fa483eb))
* **api:** update via SDK Studio ([d3f82ec](https://github.com/straddleio/straddle-node/commit/d3f82ecc00aab0e5232d9d3a8ab1882581bd5a16))
* **api:** update via SDK Studio ([c18af03](https://github.com/straddleio/straddle-node/commit/c18af039f82d934cc8684208fc937fbc39b8d8d5))
* **api:** update via SDK Studio ([cafd2a3](https://github.com/straddleio/straddle-node/commit/cafd2a3acbbc46cc8508ee4c24480130e58dc4fb))
* **api:** update via SDK Studio ([364d21b](https://github.com/straddleio/straddle-node/commit/364d21b0d0ce5b8b550fd5d78a758cb2c7e84149))
* **api:** update via SDK Studio ([08171f4](https://github.com/straddleio/straddle-node/commit/08171f4177ae1664a1a7625a4d33331e24663bb7))
* **api:** update via SDK Studio ([9adc47e](https://github.com/straddleio/straddle-node/commit/9adc47e808eb511df3d82c5ff795195d4bfa0aa4))


### Chores

* go live ([#1](https://github.com/straddleio/straddle-node/issues/1)) ([d8b0427](https://github.com/straddleio/straddle-node/commit/d8b042770d1e5cbf752cff13dba594541e0537ca))
* update SDK settings ([#3](https://github.com/straddleio/straddle-node/issues/3)) ([204b6e5](https://github.com/straddleio/straddle-node/commit/204b6e5028624353440436ef2b7aa6ae8b53173b))
