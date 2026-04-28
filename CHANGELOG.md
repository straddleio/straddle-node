# Changelog

## 3.1.0 (2026-04-28)

Full Changelog: [v3.0.0...v3.1.0](https://github.com/straddleio/straddle-node/compare/v3.0.0...v3.1.0)

### Features

* **docs:** Preliminary update to SDK Spec ([0bf0217](https://github.com/straddleio/straddle-node/commit/0bf0217ac6f2ae5c14af3eddc211a09ab0f70c1a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([e2a3cc4](https://github.com/straddleio/straddle-node/commit/e2a3cc4957e11eba6fc1c159096e6bb624013dbd))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([8b3aa94](https://github.com/straddleio/straddle-node/commit/8b3aa940311c5fc0ec0e5bb3a7a14e8235f70d96))
* support setting headers via env ([fec1ded](https://github.com/straddleio/straddle-node/commit/fec1deda50f45a16dace23a060e657f60b414ffc))


### Chores

* **formatter:** run prettier and eslint separately ([1a28c62](https://github.com/straddleio/straddle-node/commit/1a28c625e83f0f1ad133447dc1c401e6a4f4b6c1))
* **internal:** codegen related update ([9c33afe](https://github.com/straddleio/straddle-node/commit/9c33afec43c0be21c47be4431248c3667e46c526))
* **internal:** more robust bootstrap script ([b54b39d](https://github.com/straddleio/straddle-node/commit/b54b39dd3f0a1e5c1f93ed423bea7d6396a0f6cd))
* **internal:** update docs ordering ([e20fb8f](https://github.com/straddleio/straddle-node/commit/e20fb8f175394f0f7b49089689be34c457fa94ff))
* restructure docs search code ([96a9765](https://github.com/straddleio/straddle-node/commit/96a97657c01292a646af2f328bde0729ceb7ef7f))
* **tests:** bump steady to v0.22.1 ([26be0fb](https://github.com/straddleio/straddle-node/commit/26be0fb68f8fb4ee3409375dafc5d4c7a4523936))

## 3.0.0 (2026-04-17)

Full Changelog: [v2.1.0...v3.0.0](https://github.com/straddleio/straddle-node/compare/v2.1.0...v3.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([8439bac](https://github.com/straddleio/straddle-node/commit/8439bac2ce73640764243117aff70d8d68c3e1fa))
* **api:** api update ([cb915f1](https://github.com/straddleio/straddle-node/commit/cb915f138dddc920ff03803773e836f7a2e14ebb))
* **api:** fix tests ([#63](https://github.com/straddleio/straddle-node/issues/63)) ([ec94ed3](https://github.com/straddleio/straddle-node/commit/ec94ed3d9934af88094c48e070fc33e19207a5f0))
* **api:** Fix Version for migration guide. ([61dbaeb](https://github.com/straddleio/straddle-node/commit/61dbaeb6b71ef3e0cd11bc4ba5f5bab96ff5a391))
* **api:** manual updates ([92654f9](https://github.com/straddleio/straddle-node/commit/92654f9e77826e27d63f6db961080d2a8d59ed43))
* **api:** manual updates ([4d53358](https://github.com/straddleio/straddle-node/commit/4d53358223a2603b9dc4a603163a0886c8b21330))
* **api:** manual updates ([f3498a5](https://github.com/straddleio/straddle-node/commit/f3498a5a517e86995a88f1af0f3d7f187c24bce9))
* **api:** manual updates ([d4a5fcb](https://github.com/straddleio/straddle-node/commit/d4a5fcb0eda31fc0a0a7d307724e5b95f2fad9df))
* **api:** manual updates ([#53](https://github.com/straddleio/straddle-node/issues/53)) ([6aa9523](https://github.com/straddleio/straddle-node/commit/6aa95239291f11bf2ca97dee517bcd9e9a266e23))
* **api:** manual updates ([#55](https://github.com/straddleio/straddle-node/issues/55)) ([676dd31](https://github.com/straddleio/straddle-node/commit/676dd31eb8664601ac0d9ab2dacecbdfc2e9282a))
* **api:** Remove explicit environment setting ([dd5fe79](https://github.com/straddleio/straddle-node/commit/dd5fe794bb883cdae4327cbb3c17de3320709d7e))
* **client:** add support for endpoint-specific base URLs ([b41a169](https://github.com/straddleio/straddle-node/commit/b41a169fd19ad3b1e51bef12eb98e206ef457546))
* **docs:** Preliminary update to SDK Spec ([5c1139b](https://github.com/straddleio/straddle-node/commit/5c1139b48908618841500bec48abd4fb02e4322d))
* **docs:** Preliminary update to SDK Spec ([1b92d1d](https://github.com/straddleio/straddle-node/commit/1b92d1dd6c69fc36232389f8e75cd37137842312))
* **docs:** Preliminary update to SDK Spec ([a06fa98](https://github.com/straddleio/straddle-node/commit/a06fa9867c6144b6ebc5a08eb2071cc1217a33cb))
* **docs:** Preliminary update to SDK Spec ([8317420](https://github.com/straddleio/straddle-node/commit/831742016f4eff075cf484c74e5133481f42b069))
* **docs:** Preliminary update to SDK Spec ([a365389](https://github.com/straddleio/straddle-node/commit/a365389998ef875a7ea01d73f8867fd312a0a200))
* **docs:** Preliminary update to SDK Spec ([6b88252](https://github.com/straddleio/straddle-node/commit/6b882527ea139948315dc8fa491e17c1d462b974))
* **docs:** Preliminary update to SDK Spec ([79e8a9e](https://github.com/straddleio/straddle-node/commit/79e8a9e38a5b7412cd1323273f663f06bc5d258a))
* **docs:** Preliminary update to SDK Spec ([3185f1f](https://github.com/straddleio/straddle-node/commit/3185f1f4e09139613f36327b203a7bf4b198af1e))
* **docs:** Preliminary update to SDK Spec ([003c912](https://github.com/straddleio/straddle-node/commit/003c912ac746a7dc5f073e859d4d756cf778cd08))
* **docs:** Preliminary update to SDK Spec ([58fe004](https://github.com/straddleio/straddle-node/commit/58fe004ee568023e96a9282d09e5ed4fcaf3e2a9))
* **docs:** Preliminary update to SDK Spec ([2ea8487](https://github.com/straddleio/straddle-node/commit/2ea8487fb27d5ba3b41f2699e5ac80561877287c))
* **docs:** Preliminary update to SDK Spec ([8134f6d](https://github.com/straddleio/straddle-node/commit/8134f6dd0ad3cfedbe14e9dea3723dc70b0bb9ce))
* **docs:** Preliminary update to SDK Spec ([2c1efff](https://github.com/straddleio/straddle-node/commit/2c1efffc8a15e5ebbdfb15ea80d78873871f35ed))
* **docs:** Preliminary update to SDK Spec ([5da69c0](https://github.com/straddleio/straddle-node/commit/5da69c0711ebaffc518bed1a6efabab7a5c89be5))
* **docs:** Preliminary update to SDK Spec ([e7a2a54](https://github.com/straddleio/straddle-node/commit/e7a2a54eed68117c8e816000d27d3e0be4fa8cdf))
* **docs:** Preliminary update to SDK Spec ([ed1ce78](https://github.com/straddleio/straddle-node/commit/ed1ce789d97c3970cf396ba069e88e94104f1f2f))
* **docs:** Preliminary update to SDK Spec ([87560f1](https://github.com/straddleio/straddle-node/commit/87560f1d83d2b1dad9ecaac7d8d9243232660a00))
* **docs:** Preliminary update to SDK Spec ([b0ff161](https://github.com/straddleio/straddle-node/commit/b0ff161f3786ecf2e3a36dbcf386a8b8cd668ae1))
* **docs:** Preliminary update to SDK Spec ([1c363ba](https://github.com/straddleio/straddle-node/commit/1c363ba4ab493c0c583e76f9feb76295bd0ca7f8))
* **docs:** Preliminary update to SDK Spec ([45e39aa](https://github.com/straddleio/straddle-node/commit/45e39aa3eb50ed8b7f4551530169a0aaf52081cc))
* **docs:** Preliminary update to SDK Spec ([25b70d4](https://github.com/straddleio/straddle-node/commit/25b70d4e520fb1adac0daed99051e6c14e8a258e))
* **docs:** Preliminary update to SDK Spec ([7f0b9a8](https://github.com/straddleio/straddle-node/commit/7f0b9a8c0a60cc30907c6ae06bd24989daac7798))
* **docs:** Preliminary update to SDK Spec ([#54](https://github.com/straddleio/straddle-node/issues/54)) ([30da31b](https://github.com/straddleio/straddle-node/commit/30da31b86d1bb00dffe4bef8961d5127b59b15c6))
* **docs:** Preliminary update to SDK Spec ([#56](https://github.com/straddleio/straddle-node/issues/56)) ([f4a1dfd](https://github.com/straddleio/straddle-node/commit/f4a1dfd7bec494a609a08b17b8422ac3df960e28))
* **docs:** Preliminary update to SDK Spec ([#58](https://github.com/straddleio/straddle-node/issues/58)) ([e3848da](https://github.com/straddleio/straddle-node/commit/e3848dafacf144ff3af0b19be3e7866195b2e977))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([3884db6](https://github.com/straddleio/straddle-node/commit/3884db6ec634c9519d8a97de6752653fbec28b96))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([12dd8bb](https://github.com/straddleio/straddle-node/commit/12dd8bb949b7cf666e817abe4ce4d51e30424993))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([a2c85d0](https://github.com/straddleio/straddle-node/commit/a2c85d09d260f5ea4570ff82a20583e69e7b7825))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([7e98e8d](https://github.com/straddleio/straddle-node/commit/7e98e8d6cf8ddc97af5510b0a6010ac73098f3a4))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([12ac6d0](https://github.com/straddleio/straddle-node/commit/12ac6d073160f5cd98a5f385a6be41c4d8551b4f))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([db985fa](https://github.com/straddleio/straddle-node/commit/db985fa882ca995ec17f2190dbece741344f2126))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([5e19dc8](https://github.com/straddleio/straddle-node/commit/5e19dc8c74e7cc7fbaa16e9b0010465073f93c2f))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([35eb277](https://github.com/straddleio/straddle-node/commit/35eb27765a0c92a630bc18f46486e43ea13e681b))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([d202fcf](https://github.com/straddleio/straddle-node/commit/d202fcffffd50a902895017d7f62e3979c5a297d))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([f437bd3](https://github.com/straddleio/straddle-node/commit/f437bd33169a1592ebb4f1578632a56ef2c8118a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([cd18d9d](https://github.com/straddleio/straddle-node/commit/cd18d9dbb5bfa0c1e29550e9eb585e26eecac363))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([57812f0](https://github.com/straddleio/straddle-node/commit/57812f008ec4eaa1d1c107f871c7e5cd3a7487b2))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([afe54a6](https://github.com/straddleio/straddle-node/commit/afe54a686f37ba033805a64df30a0d08f169ff86))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([e70b553](https://github.com/straddleio/straddle-node/commit/e70b553c51ea49e312c295d7db5e468772092eaf))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([52ff1a9](https://github.com/straddleio/straddle-node/commit/52ff1a9bff0145a439ccb21eba68c56bc5129285))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([934268f](https://github.com/straddleio/straddle-node/commit/934268fc05752add1d91323ed174b75c87444a62))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([392c653](https://github.com/straddleio/straddle-node/commit/392c65330a30b756d8a2fd5e573d6dd627ab96de))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([721aa8d](https://github.com/straddleio/straddle-node/commit/721aa8d6c88f6076c7cf9d27e4c40b569a610e5b))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([217691b](https://github.com/straddleio/straddle-node/commit/217691b1983f916f274bee6e379233844294c206))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([8355228](https://github.com/straddleio/straddle-node/commit/835522816c1e8e28b9826c70945263d733718a16))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([135621d](https://github.com/straddleio/straddle-node/commit/135621d37a173625824a4da8c2a043dfef9fec13))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([3523513](https://github.com/straddleio/straddle-node/commit/3523513f50b0e7e74eb54ce13ea030bba0b98f69))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([625a5c2](https://github.com/straddleio/straddle-node/commit/625a5c2682d78eff56c3d368d1944cf8c063a55a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#42](https://github.com/straddleio/straddle-node/issues/42)) ([df542dd](https://github.com/straddleio/straddle-node/commit/df542dd85bf524dba46c110364a58af819bf0614))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#43](https://github.com/straddleio/straddle-node/issues/43)) ([e4b9a71](https://github.com/straddleio/straddle-node/commit/e4b9a710f9c67fa2047e92edc95e949e09ef41df))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#44](https://github.com/straddleio/straddle-node/issues/44)) ([007f5ff](https://github.com/straddleio/straddle-node/commit/007f5ff870cddca128398d8ead0e48e0343f6c34))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#45](https://github.com/straddleio/straddle-node/issues/45)) ([5895b32](https://github.com/straddleio/straddle-node/commit/5895b32d3b46f06cb90afc7d9dd3fe4bf0103f76))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#46](https://github.com/straddleio/straddle-node/issues/46)) ([d147e98](https://github.com/straddleio/straddle-node/commit/d147e9825422c31455b08b9b53660985ba5bb8bf))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#47](https://github.com/straddleio/straddle-node/issues/47)) ([e9bf86c](https://github.com/straddleio/straddle-node/commit/e9bf86c6b5b801a34ee83b9ba0efeeac7a0c2a57))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#48](https://github.com/straddleio/straddle-node/issues/48)) ([d39e5fa](https://github.com/straddleio/straddle-node/commit/d39e5facf47b253ba0264442b74557a99015bfde))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#51](https://github.com/straddleio/straddle-node/issues/51)) ([81b4e7f](https://github.com/straddleio/straddle-node/commit/81b4e7f15d71402a5d9882ca98cc1be1e5b004fc))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#57](https://github.com/straddleio/straddle-node/issues/57)) ([fa19a24](https://github.com/straddleio/straddle-node/commit/fa19a24a8287ef8225f1e6c8e0170e6ca6306d66))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#59](https://github.com/straddleio/straddle-node/issues/59)) ([f6e69dd](https://github.com/straddleio/straddle-node/commit/f6e69dda43afde3bea69fb4e974f51259f2ec622))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#60](https://github.com/straddleio/straddle-node/issues/60)) ([789d171](https://github.com/straddleio/straddle-node/commit/789d171c7c83d7fd93b651311410ae790e16f5a4))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#72](https://github.com/straddleio/straddle-node/issues/72)) ([2a379a5](https://github.com/straddleio/straddle-node/commit/2a379a59530160711119214ba31c3648cd7bcc45))
* **mcp:** add an option to disable code tool ([85bb267](https://github.com/straddleio/straddle-node/commit/85bb2679b7b69db6aae92e4c5dd5b645afb80b26))
* **mcp:** add detail field to docs search tool ([9cabac9](https://github.com/straddleio/straddle-node/commit/9cabac93a458fbf1778479b3781d7acb2090d4ba))
* **mcp:** add initial server instructions ([80e7938](https://github.com/straddleio/straddle-node/commit/80e7938a21261daf4723cfaa86eee5b278e8dba3))
* **mcp:** add typescript check to code execution tool ([0904fb3](https://github.com/straddleio/straddle-node/commit/0904fb3c473e8bbd7b9788ca338cc9c67d46ccb0))
* **mcp:** enable optional code execution tool on http mcp servers ([b1557b2](https://github.com/straddleio/straddle-node/commit/b1557b21cb1bf7087cb31b5c21da1ad27df9d591))
* **mcp:** export server and tools for more customizability ([#61](https://github.com/straddleio/straddle-node/issues/61)) ([8e9c48c](https://github.com/straddleio/straddle-node/commit/8e9c48ca346695a90b447ef55b0ca91e8fa4b890))
* **mcp:** handle code mode calls in the Stainless API ([53f28da](https://github.com/straddleio/straddle-node/commit/53f28da2fbc43620202f71c4b7e71c17e9f482dd))
* **mcp:** handle recursive schemas ([#64](https://github.com/straddleio/straddle-node/issues/64)) ([b67c52f](https://github.com/straddleio/straddle-node/commit/b67c52f957f55896df4c06814a6480ef716c29f7))
* **mcp:** implement support for binary responses ([49a383a](https://github.com/straddleio/straddle-node/commit/49a383a2f938c43518048118fb2148b4cd1fa1d2))
* **mcp:** include http information in tools ([eb2febb](https://github.com/straddleio/straddle-node/commit/eb2febbeb7b58038780d1310b3255fcc447abf2b))
* **mcp:** return logs on code tool errors ([cd3508c](https://github.com/straddleio/straddle-node/commit/cd3508c9e80c72c0f6933039dbbfb411900c5d2f))
* **mcp:** set X-Stainless-MCP header ([667d3f6](https://github.com/straddleio/straddle-node/commit/667d3f6683edafed20998c3d0692dcf6b7fe8043))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([a95033a](https://github.com/straddleio/straddle-node/commit/a95033aff1467ad836afd1b2268cb23d4cff04ca))
* **mcp:** support end-user filtering of tools, resources, and tags ([#66](https://github.com/straddleio/straddle-node/issues/66)) ([d1c8c06](https://github.com/straddleio/straddle-node/commit/d1c8c06c035e233e373bfd3b2f69bf901b87eb9d))
* **mcp:** support initializing the server with an "environment" ([7d4286b](https://github.com/straddleio/straddle-node/commit/7d4286b7b2bcc817ec8568d97a7d7b95533a12ef))
* more gracefully handle $refs and work around schema limitations ([9f5294a](https://github.com/straddleio/straddle-node/commit/9f5294ad591a6121581b9e4656641b669853c4b2))
* Update to Typescript SDK ([fb19fb7](https://github.com/straddleio/straddle-node/commit/fb19fb7c94a329444aff44008229fba81bafc724))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#68](https://github.com/straddleio/straddle-node/issues/68)) ([1038671](https://github.com/straddleio/straddle-node/commit/1038671997c4e9e72d8f5801c0192728446bc12a))
* **api:** update default API URLs and metadata ([173b3d9](https://github.com/straddleio/straddle-node/commit/173b3d9779a87734e1ebd0b1c30361dd494d6177))
* avoid type error in certain environments ([#52](https://github.com/straddleio/straddle-node/issues/52)) ([dc0c376](https://github.com/straddleio/straddle-node/commit/dc0c37662a5b288fd346cf566050e5b15621e411))
* **build:** bump node version in CI build to 20 to be compatible with MCP package ([efb517a](https://github.com/straddleio/straddle-node/commit/efb517a1b98dd316c5a923f8f7494ec99bd3dae0))
* **ci:** release-doctor — report correct token name ([8bc4645](https://github.com/straddleio/straddle-node/commit/8bc4645d438fa2f69361c13d302d885717f21b74))
* **client:** avoid memory leak with abort signals ([920de2d](https://github.com/straddleio/straddle-node/commit/920de2d45aa81a51528e182720bd4b84775c2843))
* **client:** avoid removing abort listener too early ([4a14cf1](https://github.com/straddleio/straddle-node/commit/4a14cf17ac0e86c4eac75efb868425e3bc998881))
* **client:** don't send `Content-Type` for bodyless methods ([bce3174](https://github.com/straddleio/straddle-node/commit/bce3174e85b64714aa4a3676cf7767a9e5300c15))
* **client:** preserve URL params already embedded in path ([ff94363](https://github.com/straddleio/straddle-node/commit/ff9436354d3893358d35247325c02b765ce128dc))
* **client:** send `X-Stainless-Timeout` in seconds ([#65](https://github.com/straddleio/straddle-node/issues/65)) ([1e3ff25](https://github.com/straddleio/straddle-node/commit/1e3ff25c5022851459de4e946092ae554f530da9))
* **docs/contributing:** correct pnpm link command ([b5658e8](https://github.com/straddleio/straddle-node/commit/b5658e8d962dafed09133e5979b597bd9f269ba5))
* **docs:** fix mcp installation instructions for remote servers ([66a1f91](https://github.com/straddleio/straddle-node/commit/66a1f91167d4af972e9d2605da593f9e4d1ba0e7))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#62](https://github.com/straddleio/straddle-node/issues/62)) ([808085c](https://github.com/straddleio/straddle-node/commit/808085cf930ec9d14b1810b79e1fc2c6b37fbcb1))
* **mcp:** add client instantiation options to code tool ([3440d15](https://github.com/straddleio/straddle-node/commit/3440d1572c34b5cefc035cd14ce3ad0c5f375711))
* **mcp:** allow falling back for required env variables ([a8a865f](https://github.com/straddleio/straddle-node/commit/a8a865ff6da2846d86e6d61e0e3ea747b53a1318))
* **mcpb:** pin @anthropic-ai/mcpb version ([acb0160](https://github.com/straddleio/straddle-node/commit/acb016031f2a217b1dc88942c753a26e08910e57))
* **mcp:** bump agents version in cloudflare worker MCP servers ([f17c57d](https://github.com/straddleio/straddle-node/commit/f17c57db9e88f55e1ca2cf36a578adffee4dfde4))
* **mcp:** correct code tool API endpoint ([d5e0dbb](https://github.com/straddleio/straddle-node/commit/d5e0dbb6bc29ca2df3f0316f4c3f38084922d081))
* **mcp:** correct code tool api output types ([5d1711e](https://github.com/straddleio/straddle-node/commit/5d1711ee6116e86a0a0218c6b5cce7d32a9d5f50))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([bfcb6ed](https://github.com/straddleio/straddle-node/commit/bfcb6ed827301ef320b2e27369e1f999dc0d5c6c))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([0b65ec8](https://github.com/straddleio/straddle-node/commit/0b65ec88d757a81964ad95867442dfd3c8bb0a77))
* **mcp:** fix cursor schema transformation issue with recursive references ([8810740](https://github.com/straddleio/straddle-node/commit/88107405556fdc1fbc8918af350c122d956d6964))
* **mcp:** fix env parsing ([a9d5d7b](https://github.com/straddleio/straddle-node/commit/a9d5d7b3adcb7289a618a2f5215d19cda78742c0))
* **mcp:** fix options parsing ([6baf498](https://github.com/straddleio/straddle-node/commit/6baf498c73a64574f118e3e513313e7decbf44d4))
* **mcp:** fix readEnv type error ([0992364](https://github.com/straddleio/straddle-node/commit/0992364ea1c2a57d99a1beff4b7249938c4cb466))
* **mcp:** include all necessary env vars in client instantiation ([71223e1](https://github.com/straddleio/straddle-node/commit/71223e1a0310d4cfd9020cb9c8e7593e0a89c852))
* **mcp:** include description in dynamic tool search ([8bc466a](https://github.com/straddleio/straddle-node/commit/8bc466a720971d81213c6f0969740fdf09a8cfaf))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([af2c5fe](https://github.com/straddleio/straddle-node/commit/af2c5fe1cd37a4e09fc2332033af7c50c26cb028))
* **mcp:** pass base url to code tool ([7a1a0b4](https://github.com/straddleio/straddle-node/commit/7a1a0b485bf73e03d50069b5e23907f93d6c816f))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#73](https://github.com/straddleio/straddle-node/issues/73)) ([b1ed1b1](https://github.com/straddleio/straddle-node/commit/b1ed1b19c46192ccbf3f280c618539ac089e1740))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([4c84a4a](https://github.com/straddleio/straddle-node/commit/4c84a4a94bea088f6261f8b788f70a2fe0b734e2))
* **mcp:** remove debug logging ([#70](https://github.com/straddleio/straddle-node/issues/70)) ([6aee734](https://github.com/straddleio/straddle-node/commit/6aee7343cde06ddaddbf4102f2c4fd941bd0c11e))
* **mcp:** return correct lines on typescript errors ([aabd609](https://github.com/straddleio/straddle-node/commit/aabd609da5d351d48f182de862e3d99e3f9aa187))
* **mcp:** return tool execution error on api error ([74eddf1](https://github.com/straddleio/straddle-node/commit/74eddf1d4ca6887c0538e28bdb0ea14ecf3a6908))
* **mcp:** return tool execution error on jq failure ([03e0ca4](https://github.com/straddleio/straddle-node/commit/03e0ca45e54f68838bf0843218fb5a695f75f958))
* **mcp:** update agents to fix cross-client data leak vulnerability ([fbff18a](https://github.com/straddleio/straddle-node/commit/fbff18ae327c4da47724a482c27d8fe55c3c9a3f))
* **mcp:** update code tool prompt ([9b8fe26](https://github.com/straddleio/straddle-node/commit/9b8fe2654bc6210ce2cc79ba05b32b077bfba597))
* **mcp:** update prompt ([f56b5fc](https://github.com/straddleio/straddle-node/commit/f56b5fcdb002d97423b9a989561f5a41ed7e044b))
* publish script — handle NPM errors correctly ([9c919ba](https://github.com/straddleio/straddle-node/commit/9c919ba59985fc9f1738a7aaf02accad54c38625))


### Chores

* break long lines in snippets into multiline ([ccc1a7d](https://github.com/straddleio/straddle-node/commit/ccc1a7d82f2f61b2c881a2b5ae34b4f7a64eac12))
* **build:** automatically build subpackages if present ([cffbec5](https://github.com/straddleio/straddle-node/commit/cffbec518f64f469e9ecd37ef3779b63ba54a614))
* bump version to 2.1.0, fix cloudflare worker singleton bug ([d77b9bf](https://github.com/straddleio/straddle-node/commit/d77b9bfbbf3338ade4c2e6f45e7cc8d8fea9857c))
* **ci:** add timeout thresholds for CI jobs ([aef9c62](https://github.com/straddleio/straddle-node/commit/aef9c6233d53581440d396ac9786b634614fe1a9))
* **ci:** bump node version for release workflows ([1fe0357](https://github.com/straddleio/straddle-node/commit/1fe0357582e80137af68726bf6abfe0c1d23c045))
* **ci:** enable for pull requests ([772e6ff](https://github.com/straddleio/straddle-node/commit/772e6ff20b8169af766508465ca3f4bfc12a1a88))
* **ci:** escape input path in publish-npm workflow ([b928262](https://github.com/straddleio/straddle-node/commit/b92826227adf059043291f4af52387314c3518ce))
* **ci:** only run for pushes and fork pull requests ([4f1dfb0](https://github.com/straddleio/straddle-node/commit/4f1dfb056354733a26bc960a55259f1765aeda7c))
* **ci:** only use depot for staging repos ([6bf581a](https://github.com/straddleio/straddle-node/commit/6bf581a0e4b5b5f6694523d91c2bccc48cd9fed1))
* **ci:** skip lint on metadata-only changes ([eee7321](https://github.com/straddleio/straddle-node/commit/eee73215cdfb9c55ec936014b78042474a1a585c))
* **ci:** skip uploading artifacts on stainless-internal branches ([b081da4](https://github.com/straddleio/straddle-node/commit/b081da4c062c9ef4e008e1a3ac417fcb660f1fdc))
* **ci:** upgrade `actions/github-script` ([1cd6e86](https://github.com/straddleio/straddle-node/commit/1cd6e861ee5f4e79e620511e0f1bde5a7f848029))
* **client:** do not parse responses with empty content-length ([de027b3](https://github.com/straddleio/straddle-node/commit/de027b33495dd39bdc3d3b5eaf1b661985e8159d))
* **client:** fix logger property type ([7e26210](https://github.com/straddleio/straddle-node/commit/7e262100d073d505a65e50aa494857373a68540f))
* **client:** minor internal fixes ([08e99f8](https://github.com/straddleio/straddle-node/commit/08e99f87f858c7487a54c3e130bb6df1bb9c75e8))
* **client:** restructure abort controller binding ([3507846](https://github.com/straddleio/straddle-node/commit/3507846f44626a6b8c45e10354c850e565d5bc85))
* codegen updates ([96cf2c5](https://github.com/straddleio/straddle-node/commit/96cf2c58f1d8aed1226241c00f5a933e2c824ad4))
* **docs:** grammar improvements ([ea6e299](https://github.com/straddleio/straddle-node/commit/ea6e2994e08f2f81fd2231a4c72abd1957bce0d8))
* **docs:** use top-level-await in example snippets ([40064ba](https://github.com/straddleio/straddle-node/commit/40064bafc74464c12ab93d4ec6b9f464f3048f0c))
* **exports:** cleaner resource index imports ([#49](https://github.com/straddleio/straddle-node/issues/49)) ([003263e](https://github.com/straddleio/straddle-node/commit/003263e485bb3aa6be49a591bcb46ca4adc874b0))
* **exports:** stop using path fallbacks ([#50](https://github.com/straddleio/straddle-node/issues/50)) ([c960b62](https://github.com/straddleio/straddle-node/commit/c960b6216de566747c69903725bf151c1c889f83))
* extract some types in mcp docs ([ff67bfd](https://github.com/straddleio/straddle-node/commit/ff67bfd3c59d579405bb1583626dc286d64ce42b))
* fix typo in descriptions ([214a177](https://github.com/straddleio/straddle-node/commit/214a177e14e10648c45fff5cbdedbb06a9365faf))
* improve docs for MCP servers ([83a992c](https://github.com/straddleio/straddle-node/commit/83a992c1e906013e591d742c105af22bf35f9601))
* improve publish-npm script --latest tag logic ([01ad647](https://github.com/straddleio/straddle-node/commit/01ad64779cbc30fd5cffdba5f53b6c853e17408b))
* **internal/client:** fix form-urlencoded requests ([800a67d](https://github.com/straddleio/straddle-node/commit/800a67dfc8a0ebc1f5363524f4b041afcbf74a0a))
* **internal:** add aliases for Record and Array ([#67](https://github.com/straddleio/straddle-node/issues/67)) ([7847fa0](https://github.com/straddleio/straddle-node/commit/7847fa031938aea825501995b0d7bb5d723faa87))
* **internal:** add health check to MCP server when running in HTTP mode ([f3a8f01](https://github.com/straddleio/straddle-node/commit/f3a8f016e181ee534d0824f6915965911d5f7d4f))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([4b5be37](https://github.com/straddleio/straddle-node/commit/4b5be37a42ce56e6e7d5de8894ce864f132437ea))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([e606ce3](https://github.com/straddleio/straddle-node/commit/e606ce33bef1063235cc188d889a1a1080d01786))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([796f36a](https://github.com/straddleio/straddle-node/commit/796f36ad6206eeed051a515c7ebee3def845eb7e))
* **internal:** avoid type checking errors with ts-reset ([1e3bca8](https://github.com/straddleio/straddle-node/commit/1e3bca881c00b83306b0f517cfa7339d7ef55671))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([0fe9c94](https://github.com/straddleio/straddle-node/commit/0fe9c942ac7adfb2b4884881e67c5775c3e49252))
* **internal:** cache fetch instruction calls in MCP server ([a276558](https://github.com/straddleio/straddle-node/commit/a276558ea80a311a5082aad503d5a35eaeb5b01d))
* **internal:** codegen related update ([938307e](https://github.com/straddleio/straddle-node/commit/938307e1230a86a74a2bdfb9159306d39c80675c))
* **internal:** codegen related update ([6b3c0e3](https://github.com/straddleio/straddle-node/commit/6b3c0e3cb58d470762aefedf80c9bcf28930bf7b))
* **internal:** codegen related update ([c26119b](https://github.com/straddleio/straddle-node/commit/c26119b330c5d84262990f3ee8f8d03cdbbc88ec))
* **internal:** codegen related update ([2293785](https://github.com/straddleio/straddle-node/commit/22937856ed79f889306256badff3a0327fbece1a))
* **internal:** codegen related update ([067e019](https://github.com/straddleio/straddle-node/commit/067e01978eb813103e25ed0c40f46aa14e3ceeaa))
* **internal:** codegen related update ([b037ac4](https://github.com/straddleio/straddle-node/commit/b037ac45e10c77126a8e942907ed8605cc7800e8))
* **internal:** codegen related update ([fdc1ee9](https://github.com/straddleio/straddle-node/commit/fdc1ee9c7a21f2891b18449d5a991f84763cc1bb))
* **internal:** codegen related update ([971013d](https://github.com/straddleio/straddle-node/commit/971013d6d79d41ca10347e3353aaec88df745ab8))
* **internal:** codegen related update ([f917000](https://github.com/straddleio/straddle-node/commit/f917000be475d560e7580c4347e87537cf044d61))
* **internal:** codegen related update ([160df86](https://github.com/straddleio/straddle-node/commit/160df86c6533a92644e847b848a69a8b822fde17))
* **internal:** codegen related update ([0cf7563](https://github.com/straddleio/straddle-node/commit/0cf7563b14f3acc66b97350e6517ef04f6d34b0e))
* **internal:** codegen related update ([d16669a](https://github.com/straddleio/straddle-node/commit/d16669aa3fba3b2a283bc29d39d9226b1645832a))
* **internal:** codegen related update ([3829a28](https://github.com/straddleio/straddle-node/commit/3829a28b37361ab6b52a3e939c8bfc6ccec168d8))
* **internal:** codegen related update ([b862636](https://github.com/straddleio/straddle-node/commit/b862636e02f8b51a126cb1f6681534986c223aa1))
* **internal:** codegen related update ([c455337](https://github.com/straddleio/straddle-node/commit/c4553379406df1a2074060c8a8f1a948c2126224))
* **internal:** codegen related update ([ba9f02a](https://github.com/straddleio/straddle-node/commit/ba9f02ad7e6b094e9e5fdeb621b63d84b31c0540))
* **internal:** codegen related update ([8c759c8](https://github.com/straddleio/straddle-node/commit/8c759c80a625ceecd6586f6d42cc2394b6a6b527))
* **internal:** codegen related update ([76d3b74](https://github.com/straddleio/straddle-node/commit/76d3b74d32465a543b23b2c199a059f0188eb8bc))
* **internal:** codegen related update ([b5ed983](https://github.com/straddleio/straddle-node/commit/b5ed983a596fb510e506a8162d78e442e56b5ba2))
* **internal:** configure MCP Server hosting ([d988fd7](https://github.com/straddleio/straddle-node/commit/d988fd73cc700b77f4bd2c8de8da6286bcf15082))
* **internal:** fix dockerfile ([7a9a8db](https://github.com/straddleio/straddle-node/commit/7a9a8db752b8dec40d29f0a3f4b5b3727405ba47))
* **internal:** fix MCP docker image builds in yarn projects ([38ee1e8](https://github.com/straddleio/straddle-node/commit/38ee1e8a776fe2632b3fc568ff1c63c4677e0b8b))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b5d03a7](https://github.com/straddleio/straddle-node/commit/b5d03a7c9841306ddd50c39efd3cf6c98a10b45d))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([248c573](https://github.com/straddleio/straddle-node/commit/248c573f6eda2fed4d18c8ef8eb6f8e27d7e6933))
* **internal:** fix MCP server import ordering ([d54ea7b](https://github.com/straddleio/straddle-node/commit/d54ea7b12874156fc2f7523b25f03b9c9b892725))
* **internal:** fix MCP server TS errors that occur with required client options ([d93d9c1](https://github.com/straddleio/straddle-node/commit/d93d9c11a1b37a1eca4689ea6ff8eb528a199dc4))
* **internal:** fix pagination internals not accepting option promises ([0d04931](https://github.com/straddleio/straddle-node/commit/0d049316084e41eebe1cd631224ff23ed61d124d))
* **internal:** grammar fix (it's -&gt; its) ([c599dec](https://github.com/straddleio/straddle-node/commit/c599decde12e8ae5cae4b74c9ad2a6555a49e72d))
* **internal:** improve layout of generated MCP server files ([fbdd890](https://github.com/straddleio/straddle-node/commit/fbdd890e6203eaf698f44353a12bd7e0635fb400))
* **internal:** improve local docs search for MCP servers ([bd8369f](https://github.com/straddleio/straddle-node/commit/bd8369fe1d0a7654860ba47befd1eb09e67b1e70))
* **internal:** improve local docs search for MCP servers ([bf39e19](https://github.com/straddleio/straddle-node/commit/bf39e190cd511e4497e250aa0f417875e8fb6edc))
* **internal:** make base APIResource abstract ([a29e059](https://github.com/straddleio/straddle-node/commit/a29e05953c2b77a7aa3c662d7f78ab38a03d80b9))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([48f8829](https://github.com/straddleio/straddle-node/commit/48f8829b6e00e8d23cff479b44a748d4e2c1f108))
* **internal:** make MCP code execution location configurable via a flag ([5416324](https://github.com/straddleio/straddle-node/commit/5416324a6be51d3220ae05688396eb47367eaf3a))
* **internal:** move stringifyQuery implementation to internal function ([f52f16a](https://github.com/straddleio/straddle-node/commit/f52f16aedb7f8f2f0a173000e46c9c5451a1ea93))
* **internal:** reduce CI branch coverage ([8097720](https://github.com/straddleio/straddle-node/commit/809772032e7f54dfe6cf11b542ce22736f947d3b))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([7bbb2f1](https://github.com/straddleio/straddle-node/commit/7bbb2f1e3d77b8d122eb9c4fb9460f00ae8faa87))
* **internal:** show error causes in MCP servers when running in local mode ([23938f2](https://github.com/straddleio/straddle-node/commit/23938f2ce60a3503640d42c7b387d05a7f42eedb))
* **internal:** support custom-instructions-path flag in MCP servers ([a3c4421](https://github.com/straddleio/straddle-node/commit/a3c44218909ba5f8e750a87645ca398f217908b7))
* **internal:** support local docs search in MCP servers ([c1a3087](https://github.com/straddleio/straddle-node/commit/c1a30876eada17cbc9a61591cc8db1fe11ff2ca8))
* **internal:** support oauth authorization code flow for MCP servers ([8d21c8f](https://github.com/straddleio/straddle-node/commit/8d21c8ffc4e3217c42d356310c966f52f4b6f79a))
* **internal:** support type annotations when running MCP in local execution mode ([08d7b3f](https://github.com/straddleio/straddle-node/commit/08d7b3f2cf24fff12c2f56886173789e545ef2fa))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([b7448cb](https://github.com/straddleio/straddle-node/commit/b7448cb97308c2867a06043138c6d24365c6894d))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([af39954](https://github.com/straddleio/straddle-node/commit/af399549f8ddc408581f9f6ed215fc8d3ce0b053))
* **internal:** tweak CI branches ([89f4343](https://github.com/straddleio/straddle-node/commit/89f4343685d5ec7a72e048f872d77694080b1a08))
* **internal:** update `actions/checkout` version ([f87a27e](https://github.com/straddleio/straddle-node/commit/f87a27e416d3c6ccd6c7f82a86a33613626e1722))
* **internal:** update dependencies to address dependabot vulnerabilities ([3b4ff1a](https://github.com/straddleio/straddle-node/commit/3b4ff1a3b085d04426a5ee2287758c863cc4e154))
* **internal:** update dependency ([6b2fceb](https://github.com/straddleio/straddle-node/commit/6b2fceb8bceb4a9b4607da02817f917de8e09595))
* **internal:** update gitignore ([1f37f06](https://github.com/straddleio/straddle-node/commit/1f37f06b2160097161f3846afff504a2f5aaa577))
* **internal:** update lock file ([6803a4f](https://github.com/straddleio/straddle-node/commit/6803a4ffcb6322c0d0a78f4a133e9701455fdea2))
* **internal:** update multipart form array serialization ([aac2f6d](https://github.com/straddleio/straddle-node/commit/aac2f6d5f344ba6c77f2f20e8fd843d9588b112f))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([f9ec4a5](https://github.com/straddleio/straddle-node/commit/f9ec4a5fc8c77d894b01488d679fdf8fbfe3f967))
* **internal:** upgrade babel, qs, js-yaml ([f8f8911](https://github.com/straddleio/straddle-node/commit/f8f891190a209f38068c4f98a2424b0dd06a6beb))
* **internal:** upgrade eslint ([33b7232](https://github.com/straddleio/straddle-node/commit/33b7232650d856fa8b411eeff99bca8215f84a36))
* **internal:** upload builds and expand CI branch coverage ([72969ef](https://github.com/straddleio/straddle-node/commit/72969efadc385921bc67e3f19e3907abb0a0fc53))
* **internal:** use link instead of file in MCP server package.json files ([8c020c8](https://github.com/straddleio/straddle-node/commit/8c020c8a40a92ba1c595f80a0569b47597afcbd7))
* **internal:** use npm pack for build uploads ([97d8347](https://github.com/straddleio/straddle-node/commit/97d8347b5b6e32591d46be1ec3305a3602b2b17c))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([0338bc7](https://github.com/straddleio/straddle-node/commit/0338bc71b1dc5071e2bd0fd5157fda847f967128))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([7b8c95f](https://github.com/straddleio/straddle-node/commit/7b8c95fa5ff3ee84c95c6fbcd19fefa47cdbf688))
* mcp code tool explicit error message when missing a run function ([1a3dd2e](https://github.com/straddleio/straddle-node/commit/1a3dd2e2647597a7e851956e16e7c65a6fbb63fd))
* **mcp-server:** add support for session id, forward client info ([6153f2d](https://github.com/straddleio/straddle-node/commit/6153f2d83b9d20b8bcd3e2bb5a26b2ee2224b10c))
* **mcp-server:** improve instructions ([cbe2186](https://github.com/straddleio/straddle-node/commit/cbe2186d3373062ff76437ed37a6d1e20c5ba4fa))
* **mcp-server:** increase local docs search result count from 5 to 10 ([fb565ee](https://github.com/straddleio/straddle-node/commit/fb565ee434a6b1281f5cbc88dbf8a71f14f8bf91))
* **mcp-server:** log client info ([4745c39](https://github.com/straddleio/straddle-node/commit/4745c3900388e1f81ae0195875f5008fb4480753))
* **mcp-server:** return access instructions for 404 without API key ([a34e847](https://github.com/straddleio/straddle-node/commit/a34e847a0de97667185647a130522c72dd388933))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([f559e76](https://github.com/straddleio/straddle-node/commit/f559e76550e05d3382ec752a86cd753b059ca498))
* **mcp:** add intent param to execute tool ([0015aa4](https://github.com/straddleio/straddle-node/commit/0015aa4141c83fc682be7604d625682be1d88378))
* **mcp:** add line numbers to code tool errors ([5f18c70](https://github.com/straddleio/straddle-node/commit/5f18c70ebf9e5f100b06f8c4424aefab7ce8bc88))
* **mcp:** clarify http auth error ([4bb33fe](https://github.com/straddleio/straddle-node/commit/4bb33fed8490932aea0333cdd6074a0054d3563b))
* **mcp:** correctly update version in sync with sdk ([0f00b28](https://github.com/straddleio/straddle-node/commit/0f00b28ba81e44218bc1a5d65d6eb6447fd2b593))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([de4bc94](https://github.com/straddleio/straddle-node/commit/de4bc9414e43e537b5b846f3cb475d3a158d24ca))
* **mcp:** pass intent param to execute handler ([4e9c7a3](https://github.com/straddleio/straddle-node/commit/4e9c7a354ee3368c3805c2bfc279efa2ed764102))
* **mcp:** provides high-level initMcpServer function and exports known clients ([79aea15](https://github.com/straddleio/straddle-node/commit/79aea1598e22c181d9d05d915d79c443337ef300))
* **mcp:** remove deprecated tool schemes ([87d9491](https://github.com/straddleio/straddle-node/commit/87d949188c5daadbd0ca6b86e9bb138d2ff284f8))
* **mcp:** remove duplicate assignment ([21a2dd4](https://github.com/straddleio/straddle-node/commit/21a2dd46f79477a6cbc4c5e4e7377ce9962ff861))
* **mcp:** up tsconfig lib version to es2022 ([b10750c](https://github.com/straddleio/straddle-node/commit/b10750cc8aa3c3098794cc7db6becdd6f509f8d7))
* **mcp:** update KV namespace ID for Straddle Cloudflare account ([2def7ce](https://github.com/straddleio/straddle-node/commit/2def7ce188fe1d3d613b98337ee2eabc3f3edb05))
* **mcp:** update lockfile ([467a239](https://github.com/straddleio/straddle-node/commit/467a239ae416a6b098b3f0de5300bdd41cca2d56))
* **mcp:** upgrade dependencies ([59a24a2](https://github.com/straddleio/straddle-node/commit/59a24a252ef9bf13201dfd556bccd11836d3be72))
* **mcp:** upgrade jq-web ([b12ba4c](https://github.com/straddleio/straddle-node/commit/b12ba4cf838fbfbec2dd47d5bed23cfb632b3406))
* mention unit type in timeout docs ([5e396f7](https://github.com/straddleio/straddle-node/commit/5e396f7c03af747770315845d68742479adbb46d))
* sync repo ([1189179](https://github.com/straddleio/straddle-node/commit/1189179f31ff3bad22e7c64e85c2516147bb2da6))
* **test:** do not count install time for mock server timeout ([1adb8fe](https://github.com/straddleio/straddle-node/commit/1adb8fe62e0c028ea9fdcf19b8c6bd54cac40c33))
* **tests:** bump steady to v0.19.4 ([6456103](https://github.com/straddleio/straddle-node/commit/6456103b1fddf44949a5aab7321680eecf7878e9))
* **tests:** bump steady to v0.19.5 ([7c7dbbc](https://github.com/straddleio/straddle-node/commit/7c7dbbc2ffa8babea9cbce98f1edd9bdcd24b9d9))
* **tests:** bump steady to v0.19.6 ([74b06d0](https://github.com/straddleio/straddle-node/commit/74b06d04571d4b2e37a9ad31d4fb12739ddfb047))
* **tests:** bump steady to v0.19.7 ([13f39fd](https://github.com/straddleio/straddle-node/commit/13f39fda9a17160811ccc0063274b2f38156fcba))
* **tests:** bump steady to v0.20.1 ([43fe0f7](https://github.com/straddleio/straddle-node/commit/43fe0f7f53731c16014ae9df4d3e1d7889dada82))
* **tests:** bump steady to v0.20.2 ([e6a22f7](https://github.com/straddleio/straddle-node/commit/e6a22f7c11f9c541413cf7330e5a1a6ecb769d4b))
* **tests:** use node 22 for CI tests ([4e1c8e4](https://github.com/straddleio/straddle-node/commit/4e1c8e4dac143052cb73927590ae2d7ef937faca))
* update CLI documentation ([790cd6c](https://github.com/straddleio/straddle-node/commit/790cd6cb89d6c84fc9dc05903fde2924f113532e))
* update mock server docs ([2bcac18](https://github.com/straddleio/straddle-node/commit/2bcac18110fb1d2f431de93601a08c49118b5056))
* update SDK settings ([af0639c](https://github.com/straddleio/straddle-node/commit/af0639c8b728cd28522065e586ca387a090cd1a9))
* use latest @modelcontextprotocol/sdk ([9ec34cd](https://github.com/straddleio/straddle-node/commit/9ec34cd96b2196a80d26f7280612b820a9aaca1d))
* use structured error when code execution tool errors ([059de6b](https://github.com/straddleio/straddle-node/commit/059de6b4c6c30ceb5130a8595917a7a4a2f28642))


### Documentation

* add examples to tsdocs ([74046ff](https://github.com/straddleio/straddle-node/commit/74046ffe03fa745c63bfc8c08c06cbc6e2fd0846))
* **mcp:** add a README button for one-click add to Cursor ([f0d1184](https://github.com/straddleio/straddle-node/commit/f0d118472708614fa2fe8ce51ba9128234e0d7cd))
* **mcp:** add a README link to add server to VS Code or Claude Code ([30c1d69](https://github.com/straddleio/straddle-node/commit/30c1d6993264fb319a7dbe5a9388558e71fe1d9f))
* **mcp:** add Straddle branding to Cloudflare Worker consent screen ([27ae386](https://github.com/straddleio/straddle-node/commit/27ae386103845d6f90dc208830714cf1b06a0ab6))
* **mcp:** improve MCP readme docs ([#69](https://github.com/straddleio/straddle-node/issues/69)) ([a32b1a9](https://github.com/straddleio/straddle-node/commit/a32b1a904fac8fdf4bd23abbe19860941b2a4a0c))
* **mcp:** update env vars in README ([#71](https://github.com/straddleio/straddle-node/issues/71)) ([62db729](https://github.com/straddleio/straddle-node/commit/62db7291daca86331ed4821264b3a5c166f947d6))
* prominently feature MCP server setup in root SDK readmes ([9f80ce8](https://github.com/straddleio/straddle-node/commit/9f80ce877c060b786f8c0b4005e04b5d2bb26c28))
* **readme:** fix typo ([a8294fb](https://github.com/straddleio/straddle-node/commit/a8294fba228687607ba905087b4393b2ad609eb4))


### Refactors

* **tests:** switch from prism to steady ([9487a61](https://github.com/straddleio/straddle-node/commit/9487a61c0c3f697f38cbb3eceab71a1205223be4))
* **types:** replace Record with mapped types ([977c8e5](https://github.com/straddleio/straddle-node/commit/977c8e5509cec19a2aae3f9a3d83fe3040e68d1b))

## 0.5.0 (2026-03-26)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/straddleio/straddle-node/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([cb915f1](https://github.com/straddleio/straddle-node/commit/cb915f138dddc920ff03803773e836f7a2e14ebb))


### Bug Fixes

* **mcp:** update agents to fix cross-client data leak vulnerability ([fbff18a](https://github.com/straddleio/straddle-node/commit/fbff18ae327c4da47724a482c27d8fe55c3c9a3f))


### Chores

* **mcp:** update KV namespace ID for Straddle Cloudflare account ([2def7ce](https://github.com/straddleio/straddle-node/commit/2def7ce188fe1d3d613b98337ee2eabc3f3edb05))


### Documentation

* **mcp:** add Straddle branding to Cloudflare Worker consent screen ([27ae386](https://github.com/straddleio/straddle-node/commit/27ae386103845d6f90dc208830714cf1b06a0ab6))

## 0.4.0 (2026-03-25)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/straddleio/straddle-node/compare/v0.3.0...v0.4.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **docs:** Preliminary update to SDK Spec ([1b92d1d](https://github.com/straddleio/straddle-node/commit/1b92d1dd6c69fc36232389f8e75cd37137842312))
* **docs:** Preliminary update to SDK Spec ([a06fa98](https://github.com/straddleio/straddle-node/commit/a06fa9867c6144b6ebc5a08eb2071cc1217a33cb))
* **docs:** Preliminary update to SDK Spec ([8317420](https://github.com/straddleio/straddle-node/commit/831742016f4eff075cf484c74e5133481f42b069))
* **docs:** Preliminary update to SDK Spec ([a365389](https://github.com/straddleio/straddle-node/commit/a365389998ef875a7ea01d73f8867fd312a0a200))
* **docs:** Preliminary update to SDK Spec ([6b88252](https://github.com/straddleio/straddle-node/commit/6b882527ea139948315dc8fa491e17c1d462b974))
* **docs:** Preliminary update to SDK Spec ([79e8a9e](https://github.com/straddleio/straddle-node/commit/79e8a9e38a5b7412cd1323273f663f06bc5d258a))
* **docs:** Preliminary update to SDK Spec ([3185f1f](https://github.com/straddleio/straddle-node/commit/3185f1f4e09139613f36327b203a7bf4b198af1e))
* **docs:** Preliminary update to SDK Spec ([003c912](https://github.com/straddleio/straddle-node/commit/003c912ac746a7dc5f073e859d4d756cf778cd08))
* **docs:** Preliminary update to SDK Spec ([58fe004](https://github.com/straddleio/straddle-node/commit/58fe004ee568023e96a9282d09e5ed4fcaf3e2a9))
* **docs:** Preliminary update to SDK Spec ([2ea8487](https://github.com/straddleio/straddle-node/commit/2ea8487fb27d5ba3b41f2699e5ac80561877287c))
* **docs:** Preliminary update to SDK Spec ([8134f6d](https://github.com/straddleio/straddle-node/commit/8134f6dd0ad3cfedbe14e9dea3723dc70b0bb9ce))
* **docs:** Preliminary update to SDK Spec ([2c1efff](https://github.com/straddleio/straddle-node/commit/2c1efffc8a15e5ebbdfb15ea80d78873871f35ed))
* **docs:** Preliminary update to SDK Spec ([5da69c0](https://github.com/straddleio/straddle-node/commit/5da69c0711ebaffc518bed1a6efabab7a5c89be5))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([12dd8bb](https://github.com/straddleio/straddle-node/commit/12dd8bb949b7cf666e817abe4ce4d51e30424993))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([a2c85d0](https://github.com/straddleio/straddle-node/commit/a2c85d09d260f5ea4570ff82a20583e69e7b7825))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([7e98e8d](https://github.com/straddleio/straddle-node/commit/7e98e8d6cf8ddc97af5510b0a6010ac73098f3a4))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([12ac6d0](https://github.com/straddleio/straddle-node/commit/12ac6d073160f5cd98a5f385a6be41c4d8551b4f))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([db985fa](https://github.com/straddleio/straddle-node/commit/db985fa882ca995ec17f2190dbece741344f2126))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([5e19dc8](https://github.com/straddleio/straddle-node/commit/5e19dc8c74e7cc7fbaa16e9b0010465073f93c2f))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([35eb277](https://github.com/straddleio/straddle-node/commit/35eb27765a0c92a630bc18f46486e43ea13e681b))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([d202fcf](https://github.com/straddleio/straddle-node/commit/d202fcffffd50a902895017d7f62e3979c5a297d))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([f437bd3](https://github.com/straddleio/straddle-node/commit/f437bd33169a1592ebb4f1578632a56ef2c8118a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([cd18d9d](https://github.com/straddleio/straddle-node/commit/cd18d9dbb5bfa0c1e29550e9eb585e26eecac363))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([57812f0](https://github.com/straddleio/straddle-node/commit/57812f008ec4eaa1d1c107f871c7e5cd3a7487b2))
* **mcp:** add an option to disable code tool ([85bb267](https://github.com/straddleio/straddle-node/commit/85bb2679b7b69db6aae92e4c5dd5b645afb80b26))
* **mcp:** add detail field to docs search tool ([9cabac9](https://github.com/straddleio/straddle-node/commit/9cabac93a458fbf1778479b3781d7acb2090d4ba))
* **mcp:** add initial server instructions ([80e7938](https://github.com/straddleio/straddle-node/commit/80e7938a21261daf4723cfaa86eee5b278e8dba3))
* **mcp:** add typescript check to code execution tool ([0904fb3](https://github.com/straddleio/straddle-node/commit/0904fb3c473e8bbd7b9788ca338cc9c67d46ccb0))
* **mcp:** handle code mode calls in the Stainless API ([53f28da](https://github.com/straddleio/straddle-node/commit/53f28da2fbc43620202f71c4b7e71c17e9f482dd))
* **mcp:** return logs on code tool errors ([cd3508c](https://github.com/straddleio/straddle-node/commit/cd3508c9e80c72c0f6933039dbbfb411900c5d2f))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([920de2d](https://github.com/straddleio/straddle-node/commit/920de2d45aa81a51528e182720bd4b84775c2843))
* **client:** avoid removing abort listener too early ([4a14cf1](https://github.com/straddleio/straddle-node/commit/4a14cf17ac0e86c4eac75efb868425e3bc998881))
* **client:** preserve URL params already embedded in path ([ff94363](https://github.com/straddleio/straddle-node/commit/ff9436354d3893358d35247325c02b765ce128dc))
* **docs/contributing:** correct pnpm link command ([b5658e8](https://github.com/straddleio/straddle-node/commit/b5658e8d962dafed09133e5979b597bd9f269ba5))
* **docs:** fix mcp installation instructions for remote servers ([66a1f91](https://github.com/straddleio/straddle-node/commit/66a1f91167d4af972e9d2605da593f9e4d1ba0e7))
* **mcp:** add client instantiation options to code tool ([3440d15](https://github.com/straddleio/straddle-node/commit/3440d1572c34b5cefc035cd14ce3ad0c5f375711))
* **mcp:** allow falling back for required env variables ([a8a865f](https://github.com/straddleio/straddle-node/commit/a8a865ff6da2846d86e6d61e0e3ea747b53a1318))
* **mcp:** correct code tool API endpoint ([d5e0dbb](https://github.com/straddleio/straddle-node/commit/d5e0dbb6bc29ca2df3f0316f4c3f38084922d081))
* **mcp:** correct code tool api output types ([5d1711e](https://github.com/straddleio/straddle-node/commit/5d1711ee6116e86a0a0218c6b5cce7d32a9d5f50))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([bfcb6ed](https://github.com/straddleio/straddle-node/commit/bfcb6ed827301ef320b2e27369e1f999dc0d5c6c))
* **mcp:** fix env parsing ([a9d5d7b](https://github.com/straddleio/straddle-node/commit/a9d5d7b3adcb7289a618a2f5215d19cda78742c0))
* **mcp:** fix options parsing ([6baf498](https://github.com/straddleio/straddle-node/commit/6baf498c73a64574f118e3e513313e7decbf44d4))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([af2c5fe](https://github.com/straddleio/straddle-node/commit/af2c5fe1cd37a4e09fc2332033af7c50c26cb028))
* **mcp:** pass base url to code tool ([7a1a0b4](https://github.com/straddleio/straddle-node/commit/7a1a0b485bf73e03d50069b5e23907f93d6c816f))
* **mcp:** return correct lines on typescript errors ([aabd609](https://github.com/straddleio/straddle-node/commit/aabd609da5d351d48f182de862e3d99e3f9aa187))
* **mcp:** return tool execution error on api error ([74eddf1](https://github.com/straddleio/straddle-node/commit/74eddf1d4ca6887c0538e28bdb0ea14ecf3a6908))
* **mcp:** update code tool prompt ([9b8fe26](https://github.com/straddleio/straddle-node/commit/9b8fe2654bc6210ce2cc79ba05b32b077bfba597))
* **mcp:** update prompt ([f56b5fc](https://github.com/straddleio/straddle-node/commit/f56b5fcdb002d97423b9a989561f5a41ed7e044b))


### Chores

* break long lines in snippets into multiline ([ccc1a7d](https://github.com/straddleio/straddle-node/commit/ccc1a7d82f2f61b2c881a2b5ae34b4f7a64eac12))
* **ci:** skip lint on metadata-only changes ([eee7321](https://github.com/straddleio/straddle-node/commit/eee73215cdfb9c55ec936014b78042474a1a585c))
* **ci:** skip uploading artifacts on stainless-internal branches ([b081da4](https://github.com/straddleio/straddle-node/commit/b081da4c062c9ef4e008e1a3ac417fcb660f1fdc))
* **ci:** upgrade `actions/github-script` ([1cd6e86](https://github.com/straddleio/straddle-node/commit/1cd6e861ee5f4e79e620511e0f1bde5a7f848029))
* **client:** do not parse responses with empty content-length ([de027b3](https://github.com/straddleio/straddle-node/commit/de027b33495dd39bdc3d3b5eaf1b661985e8159d))
* **client:** fix logger property type ([7e26210](https://github.com/straddleio/straddle-node/commit/7e262100d073d505a65e50aa494857373a68540f))
* **client:** restructure abort controller binding ([3507846](https://github.com/straddleio/straddle-node/commit/3507846f44626a6b8c45e10354c850e565d5bc85))
* fix typo in descriptions ([214a177](https://github.com/straddleio/straddle-node/commit/214a177e14e10648c45fff5cbdedbb06a9365faf))
* **internal/client:** fix form-urlencoded requests ([800a67d](https://github.com/straddleio/straddle-node/commit/800a67dfc8a0ebc1f5363524f4b041afcbf74a0a))
* **internal:** add health check to MCP server when running in HTTP mode ([f3a8f01](https://github.com/straddleio/straddle-node/commit/f3a8f016e181ee534d0824f6915965911d5f7d4f))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([4b5be37](https://github.com/straddleio/straddle-node/commit/4b5be37a42ce56e6e7d5de8894ce864f132437ea))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([e606ce3](https://github.com/straddleio/straddle-node/commit/e606ce33bef1063235cc188d889a1a1080d01786))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([796f36a](https://github.com/straddleio/straddle-node/commit/796f36ad6206eeed051a515c7ebee3def845eb7e))
* **internal:** avoid type checking errors with ts-reset ([1e3bca8](https://github.com/straddleio/straddle-node/commit/1e3bca881c00b83306b0f517cfa7339d7ef55671))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([0fe9c94](https://github.com/straddleio/straddle-node/commit/0fe9c942ac7adfb2b4884881e67c5775c3e49252))
* **internal:** cache fetch instruction calls in MCP server ([a276558](https://github.com/straddleio/straddle-node/commit/a276558ea80a311a5082aad503d5a35eaeb5b01d))
* **internal:** codegen related update ([2293785](https://github.com/straddleio/straddle-node/commit/22937856ed79f889306256badff3a0327fbece1a))
* **internal:** codegen related update ([067e019](https://github.com/straddleio/straddle-node/commit/067e01978eb813103e25ed0c40f46aa14e3ceeaa))
* **internal:** codegen related update ([b037ac4](https://github.com/straddleio/straddle-node/commit/b037ac45e10c77126a8e942907ed8605cc7800e8))
* **internal:** codegen related update ([fdc1ee9](https://github.com/straddleio/straddle-node/commit/fdc1ee9c7a21f2891b18449d5a991f84763cc1bb))
* **internal:** codegen related update ([971013d](https://github.com/straddleio/straddle-node/commit/971013d6d79d41ca10347e3353aaec88df745ab8))
* **internal:** codegen related update ([f917000](https://github.com/straddleio/straddle-node/commit/f917000be475d560e7580c4347e87537cf044d61))
* **internal:** codegen related update ([160df86](https://github.com/straddleio/straddle-node/commit/160df86c6533a92644e847b848a69a8b822fde17))
* **internal:** codegen related update ([0cf7563](https://github.com/straddleio/straddle-node/commit/0cf7563b14f3acc66b97350e6517ef04f6d34b0e))
* **internal:** codegen related update ([d16669a](https://github.com/straddleio/straddle-node/commit/d16669aa3fba3b2a283bc29d39d9226b1645832a))
* **internal:** codegen related update ([3829a28](https://github.com/straddleio/straddle-node/commit/3829a28b37361ab6b52a3e939c8bfc6ccec168d8))
* **internal:** fix dockerfile ([7a9a8db](https://github.com/straddleio/straddle-node/commit/7a9a8db752b8dec40d29f0a3f4b5b3727405ba47))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b5d03a7](https://github.com/straddleio/straddle-node/commit/b5d03a7c9841306ddd50c39efd3cf6c98a10b45d))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([248c573](https://github.com/straddleio/straddle-node/commit/248c573f6eda2fed4d18c8ef8eb6f8e27d7e6933))
* **internal:** fix MCP server TS errors that occur with required client options ([d93d9c1](https://github.com/straddleio/straddle-node/commit/d93d9c11a1b37a1eca4689ea6ff8eb528a199dc4))
* **internal:** fix pagination internals not accepting option promises ([0d04931](https://github.com/straddleio/straddle-node/commit/0d049316084e41eebe1cd631224ff23ed61d124d))
* **internal:** improve layout of generated MCP server files ([fbdd890](https://github.com/straddleio/straddle-node/commit/fbdd890e6203eaf698f44353a12bd7e0635fb400))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([48f8829](https://github.com/straddleio/straddle-node/commit/48f8829b6e00e8d23cff479b44a748d4e2c1f108))
* **internal:** make MCP code execution location configurable via a flag ([5416324](https://github.com/straddleio/straddle-node/commit/5416324a6be51d3220ae05688396eb47367eaf3a))
* **internal:** move stringifyQuery implementation to internal function ([f52f16a](https://github.com/straddleio/straddle-node/commit/f52f16aedb7f8f2f0a173000e46c9c5451a1ea93))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([7bbb2f1](https://github.com/straddleio/straddle-node/commit/7bbb2f1e3d77b8d122eb9c4fb9460f00ae8faa87))
* **internal:** support oauth authorization code flow for MCP servers ([8d21c8f](https://github.com/straddleio/straddle-node/commit/8d21c8ffc4e3217c42d356310c966f52f4b6f79a))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([b7448cb](https://github.com/straddleio/straddle-node/commit/b7448cb97308c2867a06043138c6d24365c6894d))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([af39954](https://github.com/straddleio/straddle-node/commit/af399549f8ddc408581f9f6ed215fc8d3ce0b053))
* **internal:** tweak CI branches ([89f4343](https://github.com/straddleio/straddle-node/commit/89f4343685d5ec7a72e048f872d77694080b1a08))
* **internal:** update `actions/checkout` version ([f87a27e](https://github.com/straddleio/straddle-node/commit/f87a27e416d3c6ccd6c7f82a86a33613626e1722))
* **internal:** update dependencies to address dependabot vulnerabilities ([3b4ff1a](https://github.com/straddleio/straddle-node/commit/3b4ff1a3b085d04426a5ee2287758c863cc4e154))
* **internal:** update gitignore ([1f37f06](https://github.com/straddleio/straddle-node/commit/1f37f06b2160097161f3846afff504a2f5aaa577))
* **internal:** update lock file ([6803a4f](https://github.com/straddleio/straddle-node/commit/6803a4ffcb6322c0d0a78f4a133e9701455fdea2))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([f9ec4a5](https://github.com/straddleio/straddle-node/commit/f9ec4a5fc8c77d894b01488d679fdf8fbfe3f967))
* **internal:** upgrade babel, qs, js-yaml ([f8f8911](https://github.com/straddleio/straddle-node/commit/f8f891190a209f38068c4f98a2424b0dd06a6beb))
* **internal:** upgrade eslint ([33b7232](https://github.com/straddleio/straddle-node/commit/33b7232650d856fa8b411eeff99bca8215f84a36))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([0338bc7](https://github.com/straddleio/straddle-node/commit/0338bc71b1dc5071e2bd0fd5157fda847f967128))
* **mcp-server:** improve instructions ([cbe2186](https://github.com/straddleio/straddle-node/commit/cbe2186d3373062ff76437ed37a6d1e20c5ba4fa))
* **mcp-server:** return access instructions for 404 without API key ([a34e847](https://github.com/straddleio/straddle-node/commit/a34e847a0de97667185647a130522c72dd388933))
* **mcp:** add intent param to execute tool ([0015aa4](https://github.com/straddleio/straddle-node/commit/0015aa4141c83fc682be7604d625682be1d88378))
* **mcp:** correctly update version in sync with sdk ([0f00b28](https://github.com/straddleio/straddle-node/commit/0f00b28ba81e44218bc1a5d65d6eb6447fd2b593))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([de4bc94](https://github.com/straddleio/straddle-node/commit/de4bc9414e43e537b5b846f3cb475d3a158d24ca))
* **mcp:** pass intent param to execute handler ([4e9c7a3](https://github.com/straddleio/straddle-node/commit/4e9c7a354ee3368c3805c2bfc279efa2ed764102))
* **mcp:** remove deprecated tool schemes ([87d9491](https://github.com/straddleio/straddle-node/commit/87d949188c5daadbd0ca6b86e9bb138d2ff284f8))
* **mcp:** up tsconfig lib version to es2022 ([b10750c](https://github.com/straddleio/straddle-node/commit/b10750cc8aa3c3098794cc7db6becdd6f509f8d7))
* **mcp:** update lockfile ([467a239](https://github.com/straddleio/straddle-node/commit/467a239ae416a6b098b3f0de5300bdd41cca2d56))
* **mcp:** upgrade dependencies ([59a24a2](https://github.com/straddleio/straddle-node/commit/59a24a252ef9bf13201dfd556bccd11836d3be72))
* **test:** do not count install time for mock server timeout ([1adb8fe](https://github.com/straddleio/straddle-node/commit/1adb8fe62e0c028ea9fdcf19b8c6bd54cac40c33))
* **tests:** bump steady to v0.19.4 ([6456103](https://github.com/straddleio/straddle-node/commit/6456103b1fddf44949a5aab7321680eecf7878e9))
* **tests:** bump steady to v0.19.5 ([7c7dbbc](https://github.com/straddleio/straddle-node/commit/7c7dbbc2ffa8babea9cbce98f1edd9bdcd24b9d9))
* **tests:** bump steady to v0.19.6 ([74b06d0](https://github.com/straddleio/straddle-node/commit/74b06d04571d4b2e37a9ad31d4fb12739ddfb047))
* **tests:** bump steady to v0.19.7 ([13f39fd](https://github.com/straddleio/straddle-node/commit/13f39fda9a17160811ccc0063274b2f38156fcba))
* update mock server docs ([2bcac18](https://github.com/straddleio/straddle-node/commit/2bcac18110fb1d2f431de93601a08c49118b5056))
* use latest @modelcontextprotocol/sdk ([9ec34cd](https://github.com/straddleio/straddle-node/commit/9ec34cd96b2196a80d26f7280612b820a9aaca1d))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([9f80ce8](https://github.com/straddleio/straddle-node/commit/9f80ce877c060b786f8c0b4005e04b5d2bb26c28))


### Refactors

* **tests:** switch from prism to steady ([9487a61](https://github.com/straddleio/straddle-node/commit/9487a61c0c3f697f38cbb3eceab71a1205223be4))

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
