# Changelog

## 0.2.0 (2025-10-01)

Full Changelog: [v0.1.1...v0.2.0](https://github.com/straddleio/straddle-node/compare/v0.1.1...v0.2.0)

### Features

* **api:** manual updates ([9c596c9](https://github.com/straddleio/straddle-node/commit/9c596c9bceaeeb9a2876c8ab2a913479849136f9))
* **api:** manual updates ([b479bbd](https://github.com/straddleio/straddle-node/commit/b479bbdbd0171aeadcc3389ac3fde698cd6b42ee))
* **docs:** Preliminary update to SDK Spec ([466cbe8](https://github.com/straddleio/straddle-node/commit/466cbe8db32608c9dc9816d8326684cd8384f2a5))
* **docs:** Preliminary update to SDK Spec ([ca35ac4](https://github.com/straddleio/straddle-node/commit/ca35ac44904568bf1e0069e40a144d23c4204f9f))
* **docs:** Preliminary update to SDK Spec ([685f3b6](https://github.com/straddleio/straddle-node/commit/685f3b641658abaadf17fa34080d9bd0166c3c36))
* **docs:** Preliminary update to SDK Spec ([6a9bb69](https://github.com/straddleio/straddle-node/commit/6a9bb69478b8cc2aaa9245665098bb883433061f))
* **docs:** Preliminary update to SDK Spec ([aa79469](https://github.com/straddleio/straddle-node/commit/aa794690555d39e64004a387dc21d623dbe2a07e))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([bd23e3e](https://github.com/straddleio/straddle-node/commit/bd23e3e5bcf1dc6f67afbf2bc4301913dbf21e6a))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([8292806](https://github.com/straddleio/straddle-node/commit/82928064eb00bce957cae2f168fe97e30f444c85))
* **mcp:** add code execution tool ([0931d36](https://github.com/straddleio/straddle-node/commit/0931d36d760ed6049d7c165bee99ed1c0f3db64f))
* **mcp:** add docs search tool ([7006e20](https://github.com/straddleio/straddle-node/commit/7006e202ddb70b688ad492974867f68c8a8c9f7c))
* **mcp:** add logging when environment variable is set ([70705e1](https://github.com/straddleio/straddle-node/commit/70705e1a9b22675f4865a0f7aeb6919f5f25532d))
* **mcp:** add option for including docs tools ([9ebc0d7](https://github.com/straddleio/straddle-node/commit/9ebc0d76612b6e70d32990187f0e6ef5a336e1e4))
* **mcp:** add option to infer mcp client ([9ee446b](https://github.com/straddleio/straddle-node/commit/9ee446b4ec33c67ac6fa9690b0ed55d98e3bc789))
* **mcp:** add unix socket option for remote MCP ([dae8154](https://github.com/straddleio/straddle-node/commit/dae8154c98805d1f63b2e6732387b8b2bf1685c8))
* **mcp:** allow setting logging level ([91827f4](https://github.com/straddleio/straddle-node/commit/91827f4d2c6b8543ea4be2e6d88ae4dbc6c68df5))
* **mcp:** enable experimental docs search tool ([81e73b7](https://github.com/straddleio/straddle-node/commit/81e73b72ed2ae04b6f9baeacca3fbe2f3a8989c6))
* **mcp:** expose client options in `streamableHTTPApp` ([16fca4e](https://github.com/straddleio/straddle-node/commit/16fca4ec4d7b6e4fa756cb7f0c0eb95b44a73350))
* **mcp:** parse query string as mcp client options in mcp server ([1dee96b](https://github.com/straddleio/straddle-node/commit/1dee96bfcfc5d6c1e58b2e8b9adda710aa58df9d))
* **mcp:** remote server with passthru auth ([7ce1f29](https://github.com/straddleio/straddle-node/commit/7ce1f294c8991e10bbe5dc466a8b19b572bce4ff))
* **mcp:** support filtering tool results by a jq expression ([1da7b9b](https://github.com/straddleio/straddle-node/commit/1da7b9bd1fc2f2be9792d5d829d3224553041851))


### Bug Fixes

* coerce nullable values to undefined ([5325138](https://github.com/straddleio/straddle-node/commit/5325138ec8a5040be729e477ce6da0956e303201))
* **mcp:** avoid sending `jq_filter` to base API ([8d8062a](https://github.com/straddleio/straddle-node/commit/8d8062aca0e0d11aa69f896f74244674ef01ab24))
* **mcp:** fix bug in header handling ([c146a91](https://github.com/straddleio/straddle-node/commit/c146a91a59073d734e6ab58385053bfdd5a29d9f))
* **mcp:** fix cli argument parsing logic ([2335e4d](https://github.com/straddleio/straddle-node/commit/2335e4d5352a8ac69defa0cb33536345b9c81b4b))
* **mcp:** fix query options parsing ([f3ae728](https://github.com/straddleio/straddle-node/commit/f3ae72893d2de25240d2953f6be5deb953d371c9))
* **mcp:** fix tool description of jq_filter ([e39ef1d](https://github.com/straddleio/straddle-node/commit/e39ef1d100787c0e44383dc84e591109a83d82e6))
* **mcp:** fix uploading dxt release assets ([58179c4](https://github.com/straddleio/straddle-node/commit/58179c493a401eb5914e5375d754a0d264a8a0cf))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([4ee440a](https://github.com/straddleio/straddle-node/commit/4ee440a245b3a85f02d13f777eee7622daf398e9))
* **mcp:** include required section for top-level properties and support naming transformations ([c046986](https://github.com/straddleio/straddle-node/commit/c0469863dccaa016434aeb8e4ca8c9b6ec66b22a))
* **mcp:** relax input type for asTextContextResult ([0126578](https://github.com/straddleio/straddle-node/commit/0126578c64932c2a76c3cfcdf1687523c3bdaadb))
* **mcp:** resolve a linting issue in server code ([69c3081](https://github.com/straddleio/straddle-node/commit/69c30819fe276b6c4d4d5614f2b1a248dd414427))
* **mcp:** reverse validJson capability option and limit scope ([75ccaa0](https://github.com/straddleio/straddle-node/commit/75ccaa07082dbc740d9ce9b6d9554f2f8042ea6a))
* **mcp:** support jq filtering on cloudflare workers ([8a0d797](https://github.com/straddleio/straddle-node/commit/8a0d7979cac441926faf9189e4555a1d958d8c82))


### Performance Improvements

* faster formatting ([4095c99](https://github.com/straddleio/straddle-node/commit/4095c99ec2778468543ae52498149d0cd9094f3e))


### Chores

* ci build action ([107d8e6](https://github.com/straddleio/straddle-node/commit/107d8e695a8fa6df00009c361eab5b93542069fd))
* **codegen:** internal codegen update ([83cd200](https://github.com/straddleio/straddle-node/commit/83cd20078c11d496dd0a871db7353ff26c1eafde))
* **deps:** update dependency node-fetch to v2.6.13 ([06da056](https://github.com/straddleio/straddle-node/commit/06da0566450ff9f928bf74d997d5547fc75a5f36))
* do not install brew dependencies in ./scripts/bootstrap by default ([ce14ce9](https://github.com/straddleio/straddle-node/commit/ce14ce9d578a82af1bf00ffd6b5c4aa18b35c13d))
* **internal:** codegen related update ([4b9eae8](https://github.com/straddleio/straddle-node/commit/4b9eae8f7d99d2aad5eea9ab6534fb9f87989c08))
* **internal:** codegen related update ([e5444be](https://github.com/straddleio/straddle-node/commit/e5444bee16879c5901c3e7a001aa70a2276743b0))
* **internal:** codegen related update ([0b21925](https://github.com/straddleio/straddle-node/commit/0b219259044ef8a4d043380a3cefbb3128037958))
* **internal:** codegen related update ([3709e2c](https://github.com/straddleio/straddle-node/commit/3709e2c168b31397a18154bbf720ecdd12980d9e))
* **internal:** codegen related update ([665f1f3](https://github.com/straddleio/straddle-node/commit/665f1f33102b634bcbe63c016ef222feb12d34a5))
* **internal:** codegen related update ([b0fd542](https://github.com/straddleio/straddle-node/commit/b0fd5426246338bdd1c7e9cdb6da65ec74e831a0))
* **internal:** codegen related update ([ad336b1](https://github.com/straddleio/straddle-node/commit/ad336b148696b23277e5b8dfd5c6a924b19cb8e4))
* **internal:** codegen related update ([79f94a6](https://github.com/straddleio/straddle-node/commit/79f94a66e79c537a21ac9f781fbe1fee2654ce5d))
* **internal:** fix incremental formatting in some cases ([1681303](https://github.com/straddleio/straddle-node/commit/1681303e2adb00d95a0967dfe030d02c565403c1))
* **internal:** formatting change ([33e3bca](https://github.com/straddleio/straddle-node/commit/33e3bca734f549da6d338de0998a9ca51bb365fe))
* **internal:** gitignore .mcpb files ([52b074a](https://github.com/straddleio/straddle-node/commit/52b074aa54077773de32b3d698b36ccfc390e186))
* **internal:** ignore .eslintcache ([6f48ec4](https://github.com/straddleio/straddle-node/commit/6f48ec448e7c7c6e35521b84bb6a95981b387c81))
* **internal:** make mcp-server publishing public by defaut ([55b3bd5](https://github.com/straddleio/straddle-node/commit/55b3bd5d7ab6466a98ee9b50dfd0a85260a6b2b0))
* **internal:** move publish config ([8adf0e0](https://github.com/straddleio/straddle-node/commit/8adf0e08c9077e6d27effea840bead522ea7744c))
* **internal:** refactor array check ([66d89e8](https://github.com/straddleio/straddle-node/commit/66d89e8df481af6d551d6791a1181c8e8af8f4b3))
* **internal:** remove .eslintcache ([2453462](https://github.com/straddleio/straddle-node/commit/2453462f18635543028cd5540d90546789823893))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([40513b4](https://github.com/straddleio/straddle-node/commit/40513b4e1dc357fad9664c366baa0dfc49d0cf4d))
* **internal:** remove redundant imports config ([01c146c](https://github.com/straddleio/straddle-node/commit/01c146c357d5feb4c5294687edc2b3a869abaaf4))
* **internal:** update comment in script ([15687d9](https://github.com/straddleio/straddle-node/commit/15687d9f6846454f32e294d004b003fb13c6aff0))
* make some internal functions async ([4392f60](https://github.com/straddleio/straddle-node/commit/4392f607f82ce6418d82bbf8ec85da9c54ba515b))
* **mcp:** add cors to oauth metadata route ([84e2c63](https://github.com/straddleio/straddle-node/commit/84e2c63be8722e93c7d2f347776942dd25d68107))
* **mcp:** allow pointing `docs_search` tool at other URLs ([a7fd709](https://github.com/straddleio/straddle-node/commit/a7fd709403823d350c9b78a9b81aa1b3d884e941))
* **mcp:** document remote server in README.md ([35ac24c](https://github.com/straddleio/straddle-node/commit/35ac24c4c05f8458f2e217bfe995235ffb4b2c6a))
* **mcp:** formatting ([b1ee221](https://github.com/straddleio/straddle-node/commit/b1ee221ef6e63940d9498e5da0270a569e369672))
* **mcp:** minor cleanup of types and package.json ([347c003](https://github.com/straddleio/straddle-node/commit/347c00324ecdfc21ff99f35c9376332fdb4d2e58))
* **mcp:** refactor streamable http transport ([e0f5727](https://github.com/straddleio/straddle-node/commit/e0f5727d091a11a9a88a90517767df4dda0578dc))
* **mcp:** rename dxt to mcpb ([f1106da](https://github.com/straddleio/straddle-node/commit/f1106da09034c284388b9e32a224d8b7f6dfeb0d))
* **mcp:** rework imports in tools ([9404f76](https://github.com/straddleio/straddle-node/commit/9404f76691ea09aec80d8698ebcd4503716d1769))
* **mcp:** update package.json ([486321c](https://github.com/straddleio/straddle-node/commit/486321caa68abd6a4c44934086f2e452ba8ee0b2))
* **mcp:** update README ([0c13b7e](https://github.com/straddleio/straddle-node/commit/0c13b7e1eee90ed9a1b7b143bbc6807210faa672))
* **mcp:** update types ([413f438](https://github.com/straddleio/straddle-node/commit/413f4388d7bad4c3e94ec3454dc26d3564f5b77e))
* **mcp:** upload dxt as release asset ([2fa1a22](https://github.com/straddleio/straddle-node/commit/2fa1a229af74269738992eb6ddbd302bf363a373))
* update @stainless-api/prism-cli to v5.15.0 ([33ebdaf](https://github.com/straddleio/straddle-node/commit/33ebdafa733216ce56663723355feff5df1bbbc1))
* update CI script ([305d4cc](https://github.com/straddleio/straddle-node/commit/305d4cc5ef61c6f5de34eac053fc75806ac472ec))
* update lockfile ([24537a4](https://github.com/straddleio/straddle-node/commit/24537a47f59741f2208f9f90fad09f4000360b3b))
* update SDK settings ([e5f6624](https://github.com/straddleio/straddle-node/commit/e5f66241a22c522509400e28eaff7e970fb102ab))
* update SDK settings ([4c3e188](https://github.com/straddleio/straddle-node/commit/4c3e18820cb5d827c1532aecc4d14dbe072c5a28))

## 0.1.1 (2025-07-08)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/straddleio/straddle-node/compare/v0.1.0...v0.1.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#38](https://github.com/straddleio/straddle-node/issues/38)) ([a9293f3](https://github.com/straddleio/straddle-node/commit/a9293f3f323f6a5ae6d44df17bbf0571b4e7979f))
* **api:** fix tests ([#63](https://github.com/straddleio/straddle-node/issues/63)) ([ec94ed3](https://github.com/straddleio/straddle-node/commit/ec94ed3d9934af88094c48e070fc33e19207a5f0))
* **api:** manual updates ([4d53358](https://github.com/straddleio/straddle-node/commit/4d53358223a2603b9dc4a603163a0886c8b21330))
* **api:** manual updates ([f3498a5](https://github.com/straddleio/straddle-node/commit/f3498a5a517e86995a88f1af0f3d7f187c24bce9))
* **api:** manual updates ([d4a5fcb](https://github.com/straddleio/straddle-node/commit/d4a5fcb0eda31fc0a0a7d307724e5b95f2fad9df))
* **api:** manual updates ([#37](https://github.com/straddleio/straddle-node/issues/37)) ([a66ae5e](https://github.com/straddleio/straddle-node/commit/a66ae5ef7df9d124db81b0d1f4dee671d5828097))
* **api:** manual updates ([#53](https://github.com/straddleio/straddle-node/issues/53)) ([6aa9523](https://github.com/straddleio/straddle-node/commit/6aa95239291f11bf2ca97dee517bcd9e9a266e23))
* **api:** manual updates ([#55](https://github.com/straddleio/straddle-node/issues/55)) ([676dd31](https://github.com/straddleio/straddle-node/commit/676dd31eb8664601ac0d9ab2dacecbdfc2e9282a))
* **api:** Remove explicit environment setting ([dd5fe79](https://github.com/straddleio/straddle-node/commit/dd5fe794bb883cdae4327cbb3c17de3320709d7e))
* **client:** accept RFC6838 JSON content types ([#39](https://github.com/straddleio/straddle-node/issues/39)) ([937b0e6](https://github.com/straddleio/straddle-node/commit/937b0e6308feda17f2c3b8d2af2c36e13344bf36))
* **client:** add support for endpoint-specific base URLs ([b41a169](https://github.com/straddleio/straddle-node/commit/b41a169fd19ad3b1e51bef12eb98e206ef457546))
* **docs:** Preliminary update to SDK Spec ([ed1ce78](https://github.com/straddleio/straddle-node/commit/ed1ce789d97c3970cf396ba069e88e94104f1f2f))
* **docs:** Preliminary update to SDK Spec ([87560f1](https://github.com/straddleio/straddle-node/commit/87560f1d83d2b1dad9ecaac7d8d9243232660a00))
* **docs:** Preliminary update to SDK Spec ([b0ff161](https://github.com/straddleio/straddle-node/commit/b0ff161f3786ecf2e3a36dbcf386a8b8cd668ae1))
* **docs:** Preliminary update to SDK Spec ([1c363ba](https://github.com/straddleio/straddle-node/commit/1c363ba4ab493c0c583e76f9feb76295bd0ca7f8))
* **docs:** Preliminary update to SDK Spec ([45e39aa](https://github.com/straddleio/straddle-node/commit/45e39aa3eb50ed8b7f4551530169a0aaf52081cc))
* **docs:** Preliminary update to SDK Spec ([25b70d4](https://github.com/straddleio/straddle-node/commit/25b70d4e520fb1adac0daed99051e6c14e8a258e))
* **docs:** Preliminary update to SDK Spec ([7f0b9a8](https://github.com/straddleio/straddle-node/commit/7f0b9a8c0a60cc30907c6ae06bd24989daac7798))
* **docs:** Preliminary update to SDK Spec ([#27](https://github.com/straddleio/straddle-node/issues/27)) ([aa4f66d](https://github.com/straddleio/straddle-node/commit/aa4f66db46c8b95583c3df07751decee3a25bf85))
* **docs:** Preliminary update to SDK Spec ([#31](https://github.com/straddleio/straddle-node/issues/31)) ([c323517](https://github.com/straddleio/straddle-node/commit/c323517db618766228a994f0e90c855d3674c87e))
* **docs:** Preliminary update to SDK Spec ([#54](https://github.com/straddleio/straddle-node/issues/54)) ([30da31b](https://github.com/straddleio/straddle-node/commit/30da31b86d1bb00dffe4bef8961d5127b59b15c6))
* **docs:** Preliminary update to SDK Spec ([#56](https://github.com/straddleio/straddle-node/issues/56)) ([f4a1dfd](https://github.com/straddleio/straddle-node/commit/f4a1dfd7bec494a609a08b17b8422ac3df960e28))
* **docs:** Preliminary update to SDK Spec ([#58](https://github.com/straddleio/straddle-node/issues/58)) ([e3848da](https://github.com/straddleio/straddle-node/commit/e3848dafacf144ff3af0b19be3e7866195b2e977))
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
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#29](https://github.com/straddleio/straddle-node/issues/29)) ([d781166](https://github.com/straddleio/straddle-node/commit/d78116673e41cd3e2d6582ee9873ca0bfde32a2d))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#33](https://github.com/straddleio/straddle-node/issues/33)) ([46aee0e](https://github.com/straddleio/straddle-node/commit/46aee0e23249c33574b7f4448865c80c2a06601b))
* **docs:** Release Updates to SDK based on Open API Spec (Final) ([#36](https://github.com/straddleio/straddle-node/issues/36)) ([2fc42af](https://github.com/straddleio/straddle-node/commit/2fc42afa267d7c7b2126b99df480952554650b9e))
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
* **mcp:** export server and tools for more customizability ([#61](https://github.com/straddleio/straddle-node/issues/61)) ([8e9c48c](https://github.com/straddleio/straddle-node/commit/8e9c48ca346695a90b447ef55b0ca91e8fa4b890))
* **mcp:** handle recursive schemas ([#64](https://github.com/straddleio/straddle-node/issues/64)) ([b67c52f](https://github.com/straddleio/straddle-node/commit/b67c52f957f55896df4c06814a6480ef716c29f7))
* **mcp:** implement support for binary responses ([49a383a](https://github.com/straddleio/straddle-node/commit/49a383a2f938c43518048118fb2148b4cd1fa1d2))
* **mcp:** include http information in tools ([eb2febb](https://github.com/straddleio/straddle-node/commit/eb2febbeb7b58038780d1310b3255fcc447abf2b))
* **mcp:** set X-Stainless-MCP header ([667d3f6](https://github.com/straddleio/straddle-node/commit/667d3f6683edafed20998c3d0692dcf6b7fe8043))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([a95033a](https://github.com/straddleio/straddle-node/commit/a95033aff1467ad836afd1b2268cb23d4cff04ca))
* **mcp:** support end-user filtering of tools, resources, and tags ([#66](https://github.com/straddleio/straddle-node/issues/66)) ([d1c8c06](https://github.com/straddleio/straddle-node/commit/d1c8c06c035e233e373bfd3b2f69bf901b87eb9d))
* **mcp:** support initializing the server with an "environment" ([7d4286b](https://github.com/straddleio/straddle-node/commit/7d4286b7b2bcc817ec8568d97a7d7b95533a12ef))
* more gracefully handle $refs and work around schema limitations ([9f5294a](https://github.com/straddleio/straddle-node/commit/9f5294ad591a6121581b9e4656641b669853c4b2))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#68](https://github.com/straddleio/straddle-node/issues/68)) ([1038671](https://github.com/straddleio/straddle-node/commit/1038671997c4e9e72d8f5801c0192728446bc12a))
* avoid type error in certain environments ([#52](https://github.com/straddleio/straddle-node/issues/52)) ([dc0c376](https://github.com/straddleio/straddle-node/commit/dc0c37662a5b288fd346cf566050e5b15621e411))
* **build:** bump node version in CI build to 20 to be compatible with MCP package ([efb517a](https://github.com/straddleio/straddle-node/commit/efb517a1b98dd316c5a923f8f7494ec99bd3dae0))
* **ci:** release-doctor — report correct token name ([8bc4645](https://github.com/straddleio/straddle-node/commit/8bc4645d438fa2f69361c13d302d885717f21b74))
* **client:** don't send `Content-Type` for bodyless methods ([bce3174](https://github.com/straddleio/straddle-node/commit/bce3174e85b64714aa4a3676cf7767a9e5300c15))
* **client:** fix export map for index exports ([#32](https://github.com/straddleio/straddle-node/issues/32)) ([d521e45](https://github.com/straddleio/straddle-node/commit/d521e450c19947dccafbb77392cbf17082d332c5))
* **client:** send `X-Stainless-Timeout` in seconds ([#65](https://github.com/straddleio/straddle-node/issues/65)) ([1e3ff25](https://github.com/straddleio/straddle-node/commit/1e3ff25c5022851459de4e946092ae554f530da9))
* **exports:** ensure resource imports don't require /index ([#41](https://github.com/straddleio/straddle-node/issues/41)) ([d900b4f](https://github.com/straddleio/straddle-node/commit/d900b4f986b2218d244145385826d29b71605932))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#62](https://github.com/straddleio/straddle-node/issues/62)) ([808085c](https://github.com/straddleio/straddle-node/commit/808085cf930ec9d14b1810b79e1fc2c6b37fbcb1))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([0b65ec8](https://github.com/straddleio/straddle-node/commit/0b65ec88d757a81964ad95867442dfd3c8bb0a77))
* **mcp:** fix cursor schema transformation issue with recursive references ([8810740](https://github.com/straddleio/straddle-node/commit/88107405556fdc1fbc8918af350c122d956d6964))
* **mcp:** fix readEnv type error ([0992364](https://github.com/straddleio/straddle-node/commit/0992364ea1c2a57d99a1beff4b7249938c4cb466))
* **mcp:** include all necessary env vars in client instantiation ([71223e1](https://github.com/straddleio/straddle-node/commit/71223e1a0310d4cfd9020cb9c8e7593e0a89c852))
* **mcp:** include description in dynamic tool search ([8bc466a](https://github.com/straddleio/straddle-node/commit/8bc466a720971d81213c6f0969740fdf09a8cfaf))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#73](https://github.com/straddleio/straddle-node/issues/73)) ([b1ed1b1](https://github.com/straddleio/straddle-node/commit/b1ed1b19c46192ccbf3f280c618539ac089e1740))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([4c84a4a](https://github.com/straddleio/straddle-node/commit/4c84a4a94bea088f6261f8b788f70a2fe0b734e2))
* **mcp:** remove debug logging ([#70](https://github.com/straddleio/straddle-node/issues/70)) ([6aee734](https://github.com/straddleio/straddle-node/commit/6aee7343cde06ddaddbf4102f2c4fd941bd0c11e))
* publish script — handle NPM errors correctly ([9c919ba](https://github.com/straddleio/straddle-node/commit/9c919ba59985fc9f1738a7aaf02accad54c38625))


### Chores

* **build:** automatically build subpackages if present ([cffbec5](https://github.com/straddleio/straddle-node/commit/cffbec518f64f469e9ecd37ef3779b63ba54a614))
* **ci:** add timeout thresholds for CI jobs ([aef9c62](https://github.com/straddleio/straddle-node/commit/aef9c6233d53581440d396ac9786b634614fe1a9))
* **ci:** bump node version for release workflows ([1fe0357](https://github.com/straddleio/straddle-node/commit/1fe0357582e80137af68726bf6abfe0c1d23c045))
* **ci:** enable for pull requests ([772e6ff](https://github.com/straddleio/straddle-node/commit/772e6ff20b8169af766508465ca3f4bfc12a1a88))
* **ci:** only run for pushes and fork pull requests ([4f1dfb0](https://github.com/straddleio/straddle-node/commit/4f1dfb056354733a26bc960a55259f1765aeda7c))
* **ci:** only use depot for staging repos ([6bf581a](https://github.com/straddleio/straddle-node/commit/6bf581a0e4b5b5f6694523d91c2bccc48cd9fed1))
* **client:** minor internal fixes ([08e99f8](https://github.com/straddleio/straddle-node/commit/08e99f87f858c7487a54c3e130bb6df1bb9c75e8))
* codegen updates ([96cf2c5](https://github.com/straddleio/straddle-node/commit/96cf2c58f1d8aed1226241c00f5a933e2c824ad4))
* **docs:** grammar improvements ([ea6e299](https://github.com/straddleio/straddle-node/commit/ea6e2994e08f2f81fd2231a4c72abd1957bce0d8))
* **docs:** use top-level-await in example snippets ([40064ba](https://github.com/straddleio/straddle-node/commit/40064bafc74464c12ab93d4ec6b9f464f3048f0c))
* **exports:** cleaner resource index imports ([#49](https://github.com/straddleio/straddle-node/issues/49)) ([003263e](https://github.com/straddleio/straddle-node/commit/003263e485bb3aa6be49a591bcb46ca4adc874b0))
* **exports:** stop using path fallbacks ([#50](https://github.com/straddleio/straddle-node/issues/50)) ([c960b62](https://github.com/straddleio/straddle-node/commit/c960b6216de566747c69903725bf151c1c889f83))
* improve docs for MCP servers ([83a992c](https://github.com/straddleio/straddle-node/commit/83a992c1e906013e591d742c105af22bf35f9601))
* improve publish-npm script --latest tag logic ([01ad647](https://github.com/straddleio/straddle-node/commit/01ad64779cbc30fd5cffdba5f53b6c853e17408b))
* **internal:** add aliases for Record and Array ([#67](https://github.com/straddleio/straddle-node/issues/67)) ([7847fa0](https://github.com/straddleio/straddle-node/commit/7847fa031938aea825501995b0d7bb5d723faa87))
* **internal:** codegen related update ([ba9f02a](https://github.com/straddleio/straddle-node/commit/ba9f02ad7e6b094e9e5fdeb621b63d84b31c0540))
* **internal:** codegen related update ([8c759c8](https://github.com/straddleio/straddle-node/commit/8c759c80a625ceecd6586f6d42cc2394b6a6b527))
* **internal:** codegen related update ([76d3b74](https://github.com/straddleio/straddle-node/commit/76d3b74d32465a543b23b2c199a059f0188eb8bc))
* **internal:** codegen related update ([b5ed983](https://github.com/straddleio/straddle-node/commit/b5ed983a596fb510e506a8162d78e442e56b5ba2))
* **internal:** codegen related update ([#30](https://github.com/straddleio/straddle-node/issues/30)) ([a155ca5](https://github.com/straddleio/straddle-node/commit/a155ca512a6a67f7ef5558efff712b5cd7d3391f))
* **internal:** codegen related update ([#34](https://github.com/straddleio/straddle-node/issues/34)) ([848d8ee](https://github.com/straddleio/straddle-node/commit/848d8ee254be49ba5288b511e9323efbe5c3e042))
* **internal:** make base APIResource abstract ([a29e059](https://github.com/straddleio/straddle-node/commit/a29e05953c2b77a7aa3c662d7f78ab38a03d80b9))
* **internal:** reduce CI branch coverage ([8097720](https://github.com/straddleio/straddle-node/commit/809772032e7f54dfe6cf11b542ce22736f947d3b))
* **internal:** remove extra empty newlines ([#40](https://github.com/straddleio/straddle-node/issues/40)) ([1be208a](https://github.com/straddleio/straddle-node/commit/1be208ad742402f1221653d23489c1d448455c25))
* **internal:** update dependency ([6b2fceb](https://github.com/straddleio/straddle-node/commit/6b2fceb8bceb4a9b4607da02817f917de8e09595))
* **internal:** upload builds and expand CI branch coverage ([72969ef](https://github.com/straddleio/straddle-node/commit/72969efadc385921bc67e3f19e3907abb0a0fc53))
* **mcp:** provides high-level initMcpServer function and exports known clients ([79aea15](https://github.com/straddleio/straddle-node/commit/79aea1598e22c181d9d05d915d79c443337ef300))
* **mcp:** remove duplicate assignment ([21a2dd4](https://github.com/straddleio/straddle-node/commit/21a2dd46f79477a6cbc4c5e4e7377ce9962ff861))
* mention unit type in timeout docs ([5e396f7](https://github.com/straddleio/straddle-node/commit/5e396f7c03af747770315845d68742479adbb46d))
* **tests:** use node 22 for CI tests ([4e1c8e4](https://github.com/straddleio/straddle-node/commit/4e1c8e4dac143052cb73927590ae2d7ef937faca))


### Documentation

* add examples to tsdocs ([74046ff](https://github.com/straddleio/straddle-node/commit/74046ffe03fa745c63bfc8c08c06cbc6e2fd0846))
* **mcp:** improve MCP readme docs ([#69](https://github.com/straddleio/straddle-node/issues/69)) ([a32b1a9](https://github.com/straddleio/straddle-node/commit/a32b1a904fac8fdf4bd23abbe19860941b2a4a0c))
* **mcp:** update env vars in README ([#71](https://github.com/straddleio/straddle-node/issues/71)) ([62db729](https://github.com/straddleio/straddle-node/commit/62db7291daca86331ed4821264b3a5c166f947d6))
* **readme:** fix typo ([a8294fb](https://github.com/straddleio/straddle-node/commit/a8294fba228687607ba905087b4393b2ad609eb4))
* update URLs from stainlessapi.com to stainless.com ([#35](https://github.com/straddleio/straddle-node/issues/35)) ([6478370](https://github.com/straddleio/straddle-node/commit/647837072e05ef9249b5b7e287ee92f4a348970d))


### Refactors

* **types:** replace Record with mapped types ([977c8e5](https://github.com/straddleio/straddle-node/commit/977c8e5509cec19a2aae3f9a3d83fe3040e68d1b))

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
