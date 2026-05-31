# nteract raw release notes (faithful transcription)

Aggregated "What's Changed" changelog bullets pulled from GitHub releases on `nteract/nteract`.
Download tables, asset lists, commit-SHA footers, and install boilerplate have been stripped. Bullets are verbatim.

# ENTRY 2.5.1  (individual)
- coversVersions: 2.5.1
- date (latest stable in series, ISO): 2026-05-26T19:55:28Z
- dateLabel (human range): May 26, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.5.1-stable.202605261941
- perVersionReleaseUrls:
    - 2.5.1 -> https://github.com/nteract/nteract/releases/tag/v2.5.1-stable.202605261941

## Technical changelog (faithful)
### 2.5.1 — May 26, 2026
### Bug Fixes

- avoid framed output shell (#3013) *(mcp-app)*([261953e](https://github.com/nteract/nteract/commit/261953ec0c6739810872f73630eba61426ade9f4))

## Frequency / raw counts
- total bullets across the series: 0 features, 1 fixes

---

# ENTRY 2.5.0  (individual)
- coversVersions: 2.5.0
- date (latest stable in series, ISO): 2026-05-26T17:26:23Z
- dateLabel (human range): May 26, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.5.0-stable.202605261709
- perVersionReleaseUrls:
    - 2.5.0 -> https://github.com/nteract/nteract/releases/tag/v2.5.0-stable.202605261709

## Technical changelog (faithful)
### 2.5.0 — May 26, 2026
### Bug Fixes

- source shell startup env for kernels (#2770) *(runtime)*([124dae7](https://github.com/nteract/nteract/commit/124dae7ffee59cf30d029c43812337433f4472bb))
- surface notebook execution and output summaries (#2769) *(runt-mcp)*([daaf0b0](https://github.com/nteract/nteract/commit/daaf0b0851b8ebebbbbcdc3abc0887d0dfa4e1fc))
- append source cells by default (#2772) *(runtimed-node)*([4182e89](https://github.com/nteract/nteract/commit/4182e897ff91563a87a7de73f724a85df6f34709))
- support inline uv python override (#2777) *(notebook)*([692093f](https://github.com/nteract/nteract/commit/692093fce1f5bb55aa4cd32d5bcc7eede38115db))
- avoid false execution pointer clears (#2778) *(runtime)*([205a3a2](https://github.com/nteract/nteract/commit/205a3a22f93019a39376df86c4bb37d9963c6af1))
- restore rich iframe rendering (#2784) *(isolated)*([975126c](https://github.com/nteract/nteract/commit/975126c0535cbe7c8eb95fc9486a9f1d8f96f875))
- deliver renderer bundle after iframe bootstrap (#2788) *(isolated)*([7d87ade](https://github.com/nteract/nteract/commit/7d87ade272a22abc0c71f30d5357f3db23139605))
- harden iframe renderer diagnostics (#2789) *(isolated)*([bd293b1](https://github.com/nteract/nteract/commit/bd293b1a00a2ba273ace242c25461932dd0f4371))
- tighten host context cleanup (#2791) *(isolated)*([d1ec68d](https://github.com/nteract/nteract/commit/d1ec68d15c25b94cc95560215c143608f4e37941))
- coordinate relay bootstrap readiness (#2795) *(notebook)*([af877c7](https://github.com/nteract/nteract/commit/af877c7d83f49eba955793b97ee3d79bfa42bdc5))
- align presence cap to 4 KiB [stack 2/6] (#2817) *(notebook-wire)*([bb1ae56](https://github.com/nteract/nteract/commit/bb1ae56fcab993bec7ab73ded12d867f93dd68ac))
- derive execution counts from outputs *(notebook-cloud)*([ee29406](https://github.com/nteract/nteract/commit/ee29406abc82a2a4849b7f36946c771ef05559d1))
- reject renders with missing blobs *(notebook-cloud)*([7512f47](https://github.com/nteract/nteract/commit/7512f47d49cb70590c8b1c3c29102cd27af51d75))
- validate snapshot publishes *(notebook-cloud)*([828e569](https://github.com/nteract/nteract/commit/828e569b148610432c04a0c57274536df76d2793))
- restrict output count fallback *(notebook-cloud)*([3a9ac54](https://github.com/nteract/nteract/commit/3a9ac54e9dd9b44ebae255e7ebacd3d721e6fbde))
- derive counts from runtime outputs (#2826) *(notebook-cloud)*([a64e4dd](https://github.com/nteract/nteract/commit/a64e4dd34b8d2f5dd3bf1d04895719bba26f4e80))
- guard renderer asset paths *(notebook-cloud)*([f320fc1](https://github.com/nteract/nteract/commit/f320fc1c46ba781a31432588eebfb8b686dfdc06))
- bound render blob validation *(notebook-cloud)*([694d3dc](https://github.com/nteract/nteract/commit/694d3dce49ef10d49021395ec315f1d013344419))
- reject renders with missing blobs (#2829) *(notebook-cloud)*([1f58df8](https://github.com/nteract/nteract/commit/1f58df894112ab2a5b6df7d1a05541346649561b))
- validate snapshot publishes (#2830) *(notebook-cloud)*([4022daf](https://github.com/nteract/nteract/commit/4022daf096c3e58edaba0f77d667073df89ad0b2))
- align read-only markdown source *(notebook-cloud)*([c45abd6](https://github.com/nteract/nteract/commit/c45abd6ca58c6b00d4c11775338a5a26a9aad63e))
- keep execution state notebook agnostic *(tracebacks)*([7e165c3](https://github.com/nteract/nteract/commit/7e165c3a7625050bfe2716d67d304b0b376fbfcf))
- normalize notebook execution sources *(tracebacks)*([0253962](https://github.com/nteract/nteract/commit/0253962d64375085f5e8e4283ecfac8e4149721f))
- sanitize notebook traceback text *(tracebacks)*([6464470](https://github.com/nteract/nteract/commit/64644702506f57ec70590ce7fa7d2862374b12e4))
- align standalone vite dev port *(xtask)*([fb59c5d](https://github.com/nteract/nteract/commit/fb59c5daf4319358b26254587442d3f01c25ffb7))
- align standalone vite dev port (#2845) *(xtask)*([47142c2](https://github.com/nteract/nteract/commit/47142c20ee7816a343ed76dc453dc6092562a5ac))
- gate room events to owners *(notebook-cloud)*([6a1dc4b](https://github.com/nteract/nteract/commit/6a1dc4b6549716824ef1bdb6bd81d7993fcf9eac))
- remove prototype room events api *(notebook-cloud)*([e1bc09f](https://github.com/nteract/nteract/commit/e1bc09f570007199da6b25f19bb8456800981262))
- remove prototype room events api (#2846) *(notebook-cloud)*([6caa6d0](https://github.com/nteract/nteract/commit/6caa6d02773fc652393053d8e82f13264205f691))
- harden hosted viewer shell *(notebook-cloud)*([fdb910a](https://github.com/nteract/nteract/commit/fdb910a669c020fc97ce19da1eeb4cd04a143f34))
- harden hosted viewer shell (#2851) *(notebook-cloud)*([f68501f](https://github.com/nteract/nteract/commit/f68501f37cd224939b5be841b9dc50b489ee6ca5))
- send host-facing renderer logs *(mcp-app)*([6586932](https://github.com/nteract/nteract/commit/6586932e66f7eeb55ef00e2e431338c3944a735b))
- send host-facing renderer logs (#2852) *(mcp-app)*([08935e9](https://github.com/nteract/nteract/commit/08935e9e154f7a8d0c9666ee4f968c1b3e8bf752))
- keep dev auth tokens out of deployed URLs *(notebook-cloud)*([321b9d6](https://github.com/nteract/nteract/commit/321b9d6004d184ad0e7cbef193e3d987c08e6342))
- keep dev auth tokens out of deployed URLs (#2854) *(notebook-cloud)*([2e9688c](https://github.com/nteract/nteract/commit/2e9688ceb9c729fe691bc7a09fa3498c07d6fc99))
- resolve dataframe blobs through host URLs *(outputs)*([2f7dd55](https://github.com/nteract/nteract/commit/2f7dd55413dcbf5987ed1203e02cc8a77fd997fa))
- resolve dataframe blobs through host URLs (#2855) *(outputs)*([03d624c](https://github.com/nteract/nteract/commit/03d624cc6e85316828d2f60d25cb12f75b60e284))
- verify runtime blob uploads *(notebook-cloud)*([90a1c02](https://github.com/nteract/nteract/commit/90a1c02555e86d49924bf375cb55a6d7083ddbd0))
- verify runtime blob uploads (#2859) *(notebook-cloud)*([53f5468](https://github.com/nteract/nteract/commit/53f5468044907b0431ee372955bf51bca9c35aaf))
- derive render caches from snapshots *(notebook-cloud)*([7cb88d4](https://github.com/nteract/nteract/commit/7cb88d4d81552eb0bfc93b2fb7d160eba9b33f44))
- derive render caches from snapshots (#2860) *(notebook-cloud)*([e1fc042](https://github.com/nteract/nteract/commit/e1fc042b6821052933dfde7719bdb08fb48ad732))
- harden hosted asset routes *(notebook-cloud)*([5b62dfc](https://github.com/nteract/nteract/commit/5b62dfc3c43d921cfdbca020d11e8a343e1e0043))
- harden hosted asset routes (#2862) *(notebook-cloud)*([a244ca5](https://github.com/nteract/nteract/commit/a244ca56c556d87ea20d137994dfa0f39ec1cc47))
- require loopback for untokened dev auth *(notebook-cloud)*([ce8c102](https://github.com/nteract/nteract/commit/ce8c102da5235ec6d5fb517b0e0a0f68520de2a9))
- require loopback for untokened dev auth (#2863) *(notebook-cloud)*([7bfb23b](https://github.com/nteract/nteract/commit/7bfb23bd16ccd6fda138e8d6a1c01bb79148507b))
- resolve OutputWidget images as blobs *(outputs)*([21ebe7d](https://github.com/nteract/nteract/commit/21ebe7dba3e9f2dc0d7f44a6bb9419425e249743))
- resolve OutputWidget images as blobs (#2861) *(outputs)*([46932ae](https://github.com/nteract/nteract/commit/46932ae51e1734fcc512e090e1c3c4acef0d973b))
- link traceback cells in cloud viewer *(notebook-cloud)*([f1c769d](https://github.com/nteract/nteract/commit/f1c769da90fdaf71ca04e89c10f3a12612ed46a9))
- keep cell targets identity-only *(traceback)*([8c75ce9](https://github.com/nteract/nteract/commit/8c75ce9ddbb3f36615e25205d582e40bbda165ca))
- link traceback cells in cloud viewer (#2865) *(notebook-cloud)*([e56ad55](https://github.com/nteract/nteract/commit/e56ad5524d85c47d5f51cef22c347264c4f50f26))
- keep mixed isolated renders unsplit *(outputs)*([db4a148](https://github.com/nteract/nteract/commit/db4a148faa7083d05b50cf18ed90bd8eec21fec1))
- keep mixed isolated renders unsplit (#2864) *(outputs)*([971b9b9](https://github.com/nteract/nteract/commit/971b9b9257773a13b5d2ebd220635ad9471588cb))
- harden Access auth fallback and key rotation *(notebook-cloud)*([3a8bc2c](https://github.com/nteract/nteract/commit/3a8bc2cdc18cc8404fa19469ba44aa887db8882b))
- load runtime wasm from asset origin *(notebook-cloud)*([9f1fa0c](https://github.com/nteract/nteract/commit/9f1fa0c8c7dfc1104ddaefb6de357972308cb3e6))
- clean up failed live sync init *(notebook-cloud)*([201d8c6](https://github.com/nteract/nteract/commit/201d8c6fd4fff7b665e0e41d597864e4c4796bfc))
- bound live sync startup *(notebook-cloud)*([c7a225c](https://github.com/nteract/nteract/commit/c7a225c53ca73f83f444df4a79e80757b81136b4))
- preserve ACL owners atomically *(notebook-cloud)*([2631448](https://github.com/nteract/nteract/commit/2631448cc5e7b37ba53087a80321d7127d9082c5))
- report guarded ACL delete conflicts *(notebook-cloud)*([65f1907](https://github.com/nteract/nteract/commit/65f1907188682560906b9cd39587b262dc13dd1a))
- abbreviate traceback package paths with ellipsis *(notebook)*([ec4d967](https://github.com/nteract/nteract/commit/ec4d96721894b12bb095cbc0e84385aaba0bec1c))
- abbreviate traceback package paths with ellipsis (#2874) *(notebook)*([2bcf568](https://github.com/nteract/nteract/commit/2bcf568a00d530bf09ae4dbf305073c88073fd06))
- fit sift output within iframe cap *(notebook-cloud)*([777b6f5](https://github.com/nteract/nteract/commit/777b6f555da2609b7107b17abc18fd8808f40495))
- fit sift output within iframe cap (#2876) *(notebook-cloud)*([54a084d](https://github.com/nteract/nteract/commit/54a084d88a284561063e407254c7e12193b7bffc))
- bootstrap live markdown sync *(notebook-cloud)*([bfc559e](https://github.com/nteract/nteract/commit/bfc559e77da53dc997b2c2d905470a1f83c65c88))
- stream live updates to viewers *(notebook-cloud)*([9b1fc09](https://github.com/nteract/nteract/commit/9b1fc09579034f3141a1cd2df89b23b5fbfdeeee))
- add collaboration observability *(notebook-cloud)*([cf68dcf](https://github.com/nteract/nteract/commit/cf68dcffc081fde196a0c55760d1f9c34623f743))
- disable cloud pool sync *(notebook-cloud)*([497d0ce](https://github.com/nteract/nteract/commit/497d0cecb9056b00a659f5c0796c6b5335e53311))
- bootstrap live markdown sync (#2875) *(notebook-cloud)*([e64de8b](https://github.com/nteract/nteract/commit/e64de8bf30e82101064fe5d617ddcad84e9f2786))
- add collaborator auth diagnostics *(notebook-cloud)*([561c981](https://github.com/nteract/nteract/commit/561c9816f404b0a2537dbfb53282641ac4aed61f))
- add collaborator auth diagnostics (#2878) *(notebook-cloud)*([8a0ff75](https://github.com/nteract/nteract/commit/8a0ff759ba2372bd76d7afb9aead402c8b5075e1))
- support local browser collab smoke *(notebook-cloud)*([7e73b9a](https://github.com/nteract/nteract/commit/7e73b9a2ee9db57af9916c5614410ec313bfd7d1))
- recover cloud editor sync *(notebook-cloud)*([30000cb](https://github.com/nteract/nteract/commit/30000cbc8dbe0b47ba57ed7f1611d9cb7d36e0a2))
- reconnect on send-side socket failure *(notebook-cloud)*([0856bab](https://github.com/nteract/nteract/commit/0856bab4d73d03f9b48ef04c8b531c0db652e78a))
- reconnect on send-side socket failure (#2881) *(notebook-cloud)*([0c3dd03](https://github.com/nteract/nteract/commit/0c3dd0371c1a217b403a83ff9ae4e0ec1b8b23a1))
- support chunked arrow streams in dx *(outputs)*([f82474d](https://github.com/nteract/nteract/commit/f82474dd8621e7e839edc1c0f1a0fce9fdd46e76))
- use crdt bridge for live markdown *(notebook-cloud)*([fcc4a15](https://github.com/nteract/nteract/commit/fcc4a15c2e36524e47b6cc75eef1c6f6db50e5a1))
- apply remote text attribution patches *(notebook-cloud)*([b649cf0](https://github.com/nteract/nteract/commit/b649cf03e29e59bfc75e636119d3b08a755a1e93))
- use crdt bridge for live markdown (#2883) *(notebook-cloud)*([bd74c90](https://github.com/nteract/nteract/commit/bd74c90076e8bd3924efbfc0de13277241ee4eee))
- surface collaborator auth diagnostics *(notebook-cloud)*([b4feb83](https://github.com/nteract/nteract/commit/b4feb83135628651df85785b9143290f3fe5b5ed))
- surface collaborator auth diagnostics (#2884) *(notebook-cloud)*([ab27ffc](https://github.com/nteract/nteract/commit/ab27ffc57d6810d4e5ffe1ffc78fb682a7411dfa))
- skip storing read-only sync no-ops *(notebook-cloud)*([d4cd388](https://github.com/nteract/nteract/commit/d4cd3883376432022cebdbf33c6e96628603ddd3))
- skip storing read-only sync no-ops (#2885) *(notebook-cloud)*([1c8e37e](https://github.com/nteract/nteract/commit/1c8e37e3b881abfbc60120cd28bec3ba8092a01e))
- harden credential transport *(notebook-cloud)*([1ae07e5](https://github.com/nteract/nteract/commit/1ae07e5986109c425c3446d45b9da6c2c08719d5))
- harden credential transport (#2889) *(notebook-cloud)*([eeaa4c8](https://github.com/nteract/nteract/commit/eeaa4c8ae75b09eaf3a244e6b5f59f49803f1b7a))
- seed ACL-backed smoke rooms *(notebook-cloud)*([61bc487](https://github.com/nteract/nteract/commit/61bc4877c907d3225a3063ae4f5814b57b39c4ad))
- seed ACL-backed smoke rooms (#2893) *(notebook-cloud)*([da98c05](https://github.com/nteract/nteract/commit/da98c05b08dc82974ab7fb56861fc2152e8c451a))
- harden Access smoke credentials *(notebook-cloud)*([ec61624](https://github.com/nteract/nteract/commit/ec616245d2886811dba12b78749e90808e12731c))
- accept Access token headers *(notebook-cloud)*([08b0ed3](https://github.com/nteract/nteract/commit/08b0ed3f0dd665d5b743c7e9d12e96a25edabedc))
- accept Access token headers (#2894) *(notebook-cloud)*([32b0909](https://github.com/nteract/nteract/commit/32b090953347ac59f9cec115aab7490696efc6ce))
- harden Access auth edges *(notebook-cloud)*([6101c83](https://github.com/nteract/nteract/commit/6101c8378ee961760f8162fa60d942a199a0f71a))
- harden Access auth edges (#2898) *(notebook-cloud)*([033b670](https://github.com/nteract/nteract/commit/033b6707b1df2cc587a41c7258b3caac2b903e84))
- settle terminal stream outputs *(notebook-sync)*([0a8fc7a](https://github.com/nteract/nteract/commit/0a8fc7aff79d6b61b2022e57975f532b797ad35f))
- settle terminal stream outputs (#2899) *(notebook-sync)*([72d1c98](https://github.com/nteract/nteract/commit/72d1c98a49874f97f16c54de0d84d3f79897a508))
- redact output text before send *(kernel-launcher)*([f8212c0](https://github.com/nteract/nteract/commit/f8212c016575fc3495e9ef47f53368a2079035eb))
- vendor output redaction modules *(kernel-launcher)*([e5aecbb](https://github.com/nteract/nteract/commit/e5aecbb0723e5a1cab7feaa1bc14887ce838d2a9))
- redact output text before send (#2896) *(kernel-launcher)*([0afcfed](https://github.com/nteract/nteract/commit/0afcfed8870bd8c8cce4fb6cd11b4e9e59b221e5))
- harden opencode runner *(pr-reviewer)*([02adb1b](https://github.com/nteract/nteract/commit/02adb1b2d437fc98cd4966b6a651d43dfef13c55))
- preserve malformed reviewer output *(pr-reviewer)*([000f56d](https://github.com/nteract/nteract/commit/000f56d9b53a689070a677f3838e93ab657c4c93))
- parse final opencode review json *(pr-reviewer)*([535759c](https://github.com/nteract/nteract/commit/535759c30d7becdab8e5d914746fbead351565e6))
- bound opencode review runs *(pr-reviewer)*([401c266](https://github.com/nteract/nteract/commit/401c266b2bf3f67ba8d7a110e78a1c6ecb4977a9))
- enforce inline opencode permissions *(pr-reviewer)*([a3bcb80](https://github.com/nteract/nteract/commit/a3bcb806382f4a79e96c8e13d0dff9f511b615f0))
- dispose wasm table data *(sift)*([7058778](https://github.com/nteract/nteract/commit/7058778c699078d46397906600e10118773f6d01))
- dispose wasm table data (#2901) *(sift)*([4b33a3b](https://github.com/nteract/nteract/commit/4b33a3b426799e26e703e7ab05c5838459455386))
- reuse plotly display updates *(renderer)*([0657098](https://github.com/nteract/nteract/commit/065709873707b9135d620492f4568b41f957b0d8))
- reuse plotly display updates (#2911) *(renderer)*([9372ffd](https://github.com/nteract/nteract/commit/9372ffd2e583782d9094bba458e071fb96904ea9))
- allow Access token preflights *(notebook-cloud)*([b612a5b](https://github.com/nteract/nteract/commit/b612a5bb30881236384b08d040a1a8d8627f88cc))
- allow Access token preflights (#2912) *(notebook-cloud)*([a45afbc](https://github.com/nteract/nteract/commit/a45afbc9a139b1c49c96814bde072193704d3543))
- gate editor runtime state writes *(notebook-cloud)*([3af8ff0](https://github.com/nteract/nteract/commit/3af8ff0e3a8d115794fe0ee9501fc9b4b7c3de66))
- gate editor runtime state writes (#2916) *(notebook-cloud)*([6cded37](https://github.com/nteract/nteract/commit/6cded373c659ba65972381498295a700cc3af96e))
- reuse vega display updates *(renderer)*([f458341](https://github.com/nteract/nteract/commit/f458341cbb8817a92af860355d5757a956752324))
- reuse vega display updates (#2913) *(renderer)*([145f722](https://github.com/nteract/nteract/commit/145f722eb603d6dc2c8dd54f58b4ce8610a4f0e2))
- reuse leaflet display updates *(renderer)*([1e91d25](https://github.com/nteract/nteract/commit/1e91d25f4005e317140a176173f6222cb99eade6))
- reuse leaflet display updates (#2918) *(renderer)*([9ead10a](https://github.com/nteract/nteract/commit/9ead10a64285e565cde476e8ce038c8dfa8db03b))
- gate artifact mutations by origin *(notebook-cloud)*([91e3e9b](https://github.com/nteract/nteract/commit/91e3e9bdd68d93697b5055084710a8d8dc67446b))
- gate artifact mutations by origin (#2921) *(notebook-cloud)*([2d869cf](https://github.com/nteract/nteract/commit/2d869cf6d657ff3047cb6326b1fbfe999f10364b))
- require explicit output identity *(renderer)*([bf63f90](https://github.com/nteract/nteract/commit/bf63f903bc5e24817736a40bc5012920c378b1b8))
- require explicit output identity (#2922) *(renderer)*([186c65c](https://github.com/nteract/nteract/commit/186c65c92933e5427f2dfc169f63fa400ccf0308))
- prefer Access assertions at origin *(notebook-cloud)*([ca8d69f](https://github.com/nteract/nteract/commit/ca8d69fc2f226c57cc0b40de70bf8f70f84a58d1))
- prefer Access assertions at origin (#2924) *(notebook-cloud)*([3747692](https://github.com/nteract/nteract/commit/3747692545c97016d85ea68ade063e58398f1d31))
- restrict blob uploads to runtime scopes *(notebook-cloud)*([8b8ffd1](https://github.com/nteract/nteract/commit/8b8ffd181a24b12f648362c64e1aa91eafb733a7))
- restrict blob uploads to runtime scopes (#2925) *(notebook-cloud)*([6c1e279](https://github.com/nteract/nteract/commit/6c1e2799104da86197c3fea836f81667fc3df728))
- require Origin for Access assertions *(notebook-cloud)*([19609b9](https://github.com/nteract/nteract/commit/19609b90a54d1440c3edb81e152321909c03c197))
- require Origin for Access assertions (#2931) *(notebook-cloud)*([f292d18](https://github.com/nteract/nteract/commit/f292d18a9a5fdbd90f8cdc62b1a268e4ee14be5e))
- fail closed on live sync decode errors *(notebook-cloud)*([ab18301](https://github.com/nteract/nteract/commit/ab18301e391ab2ff20e4b9160e250f5187a5e71f))
- fail closed on live sync decode errors (#2932) *(notebook-cloud)*([09ab5ea](https://github.com/nteract/nteract/commit/09ab5ea81a6d6f6a3c1372d6fb236fb59a9fe94c))
- preserve polars object date columns *(kernel-launcher)*([e6f73e2](https://github.com/nteract/nteract/commit/e6f73e2bb38ecc8687d64ac22173cdb2a538a426))
- avoid eager polars imports *(kernel-launcher)*([4f4504a](https://github.com/nteract/nteract/commit/4f4504aab3edea8f47f753e91fdc895f2416c624))
- refine polars date normalization *(kernel-launcher)*([e5cb7c3](https://github.com/nteract/nteract/commit/e5cb7c3563e2e6667ea790cbae75f4337090ffc7))
- preserve polars object date columns (#2935) *(kernel-launcher)*([94741b4](https://github.com/nteract/nteract/commit/94741b41fc995fccc1ac7271cc9791b40cd818e1))
- tighten invite resolution storage *(notebook-cloud)*([827fcda](https://github.com/nteract/nteract/commit/827fcda79254dd29436468650d0a8d1718ca6d26))
- stabilize sharing invite storage *(notebook-cloud)*([aa9f96e](https://github.com/nteract/nteract/commit/aa9f96e32cf08bef3569d87d13a19cae3b19f848))
- recover duplicate invite races *(notebook-cloud)*([530a2f4](https://github.com/nteract/nteract/commit/530a2f4b15343729a041de5408f4a2eff3578a9f))
- gate invite acl grants on accepted rows *(notebook-cloud)*([4cbab1c](https://github.com/nteract/nteract/commit/4cbab1c304a3633b4f72c9b673fe8869d2541fe5))
- isolate stale invite parents *(notebook-cloud)*([3e524f5](https://github.com/nteract/nteract/commit/3e524f5fab912306e3a93a5ec96ad0b51e0b4747))
- narrow duplicate invite constraint handling *(notebook-cloud)*([4d9fd4c](https://github.com/nteract/nteract/commit/4d9fd4cc3353f4cd4908b44ff912e2735668854c))
- skip invite writes when none are pending *(notebook-cloud)*([0d95b8a](https://github.com/nteract/nteract/commit/0d95b8a0f6557e067800369f4e5381ae4f0a0fd5))
- narrow invite list rows *(notebook-cloud)*([f9de405](https://github.com/nteract/nteract/commit/f9de4055b9965e91baec6f59d49f3d63ab09efd1))
- validate invite inputs before storage *(notebook-cloud)*([b5c4532](https://github.com/nteract/nteract/commit/b5c453206e171e0c575c754ba64108ec87a529b5))
- harden invite route edge cases *(notebook-cloud)*([eba8da1](https://github.com/nteract/nteract/commit/eba8da11bfb902d45250ec85e64a8afeca710010))
- fill raster image outputs *(mcp-app)*([16c731f](https://github.com/nteract/nteract/commit/16c731fcbeb3072f3dbc2c15a8f14b6cb1430cc1))
- fill raster image outputs (#2950) *(mcp-app)*([7e6c195](https://github.com/nteract/nteract/commit/7e6c1956c1715d9e9e7702a17cdf165cb268e5b6))
- autosize HTML outputs *(mcp-app)*([7aaf552](https://github.com/nteract/nteract/commit/7aaf5520b614973d1f870b86d02c7866af4f628b))
- autosize HTML outputs (#2952) *(mcp-app)*([098ff66](https://github.com/nteract/nteract/commit/098ff66824ba6f5ad2cf110d8928360fe1a8afab))
- harden Access edge cases *(notebook-cloud)*([3ae50f6](https://github.com/nteract/nteract/commit/3ae50f63b2ac32ec20b37963090e0f149f9d1b05))
- harden Access edge cases (#2951) *(notebook-cloud)*([997116f](https://github.com/nteract/nteract/commit/997116fdb0393a8ad648aad849c28b98049fddc0))
- keep report iframes scrollable *(notebook-cloud)*([6101d25](https://github.com/nteract/nteract/commit/6101d2539d95a62ada07fb5f451ec5b4e96e9f0d))
- keep report iframes scrollable (#2953) *(notebook-cloud)*([a48d075](https://github.com/nteract/nteract/commit/a48d075a4bb7015f1582b3b8bec42dc9556b18d9))
- prefer Vega outputs over HTML fallbacks *(mcp-app)*([7c7ca0d](https://github.com/nteract/nteract/commit/7c7ca0db25090f200fbcbe959a5fe9f836c4513f))
- prefer Vega outputs over HTML fallbacks (#2954) *(mcp-app)*([a7f503c](https://github.com/nteract/nteract/commit/a7f503c1291d0380baa9e1218c461ae56bab9dc9))
- log host container dimensions *(mcp-app)*([467e084](https://github.com/nteract/nteract/commit/467e08417521ab5951d6a36e0a2a670eab459575))
- log host container dimensions (#2955) *(mcp-app)*([6f36a5b](https://github.com/nteract/nteract/commit/6f36a5beecc515fa4916bcef100a7bb1d00ed858))
- reduce host log noise *(mcp-app)*([eb543d0](https://github.com/nteract/nteract/commit/eb543d0a544743025d10a71af51cc7931bb93ea7))
- reduce host log noise (#2956) *(mcp-app)*([373b835](https://github.com/nteract/nteract/commit/373b835bc5a62e0542cefa454597cdaf2401aa85))
- dedupe shared renderer plugin installs *(mcp-app)*([fba542c](https://github.com/nteract/nteract/commit/fba542c861890ec15b4338f20aa3ba22a92e2cde))
- dedupe shared renderer plugin installs (#2961) *(mcp-app)*([2b5c5f0](https://github.com/nteract/nteract/commit/2b5c5f096af5576be8b8f17de4555e71cfd51074))
- expose output resource ui metadata *(mcp-app)*([9a059ef](https://github.com/nteract/nteract/commit/9a059efb8fe9381c44b2caba0ac578a924176215))
- expose output resource ui metadata (#2962) *(mcp-app)*([0ed3b78](https://github.com/nteract/nteract/commit/0ed3b78311001b9fd2abd0cac80128e72ea06674))
- align shared output frame sizing *(mcp-app)*([592518f](https://github.com/nteract/nteract/commit/592518f56ae73504c78ac24c52c5b229a09f2d30))
- align shared output frame sizing (#2963) *(mcp-app)*([b3e3958](https://github.com/nteract/nteract/commit/b3e3958b93e6e5e6b107e5030ab4a8606e38fb82))
- queue cells while kernel launch resolves *(runtimed)*([1fe037a](https://github.com/nteract/nteract/commit/1fe037a3c678c827f305a35997c9c995d6bfcfbb))
- queue cells while kernel launch resolves (#2965) *(runtimed)*([e396bdd](https://github.com/nteract/nteract/commit/e396bddf1bdc9dde87a3689fc19c7ae8ab8b7282))
- attribute queued executions to submitter (#2969) *(runtimed)*([802dbe9](https://github.com/nteract/nteract/commit/802dbe937bf75d84cd5eedb43821d73c9b58a0aa))
- align rich output expansion with renderer (#2976) *(mcp-app)*([3f196d9](https://github.com/nteract/nteract/commit/3f196d96e99d59111f6553392c09b5e13af87bcb))
- sync viewer output themes (#2983) *(notebook-cloud)*([06533fd](https://github.com/nteract/nteract/commit/06533fde402cd729efd1d7aa0ad5e6538e4da79a))
- avoid formatting large binary cells (#2986) *(sift)*([a38f725](https://github.com/nteract/nteract/commit/a38f725052ce064e2db33e83cbddec219018965f))
- anchor cell moves by cell id (#2990) *(mcp)*([7698a6d](https://github.com/nteract/nteract/commit/7698a6de1bbc2fbc939bbaa535abb4b845bd0534))
- remove cell positions from summaries (#2991) *(mcp)*([c7e41d9](https://github.com/nteract/nteract/commit/c7e41d9599c5bb509f8415ca2ae7411161abd6da))
- route isolated diagnostics through host logging (#2992) *(renderer)*([d8c98ae](https://github.com/nteract/nteract/commit/d8c98aee7817f45f1d10782ed4ac85c3ae135032))
- use object init for bindgen modules (#2993) *(wasm)*([438a126](https://github.com/nteract/nteract/commit/438a126d850d831d9a68b706cc56ab9b9ea88472))
- use shared full-height output sizing (#2985) *(mcp-app)*([90a02b2](https://github.com/nteract/nteract/commit/90a02b2a635ec4c99c8e840f622f55efca53dfd2))
- include cell ids in notebook frames (#2995) *(traceback)*([abb0ee8](https://github.com/nteract/nteract/commit/abb0ee8fa9af8a9d882c7e72cbe799f0b5e6ca35))
- align hosted viewer theming (#2996) *(notebook-cloud)*([583f33a](https://github.com/nteract/nteract/commit/583f33a5125716aa62f5a6e78f8ef499dd07cc27))
- suppress KaTeX newline warnings (#2997) *(renderer)*([481836b](https://github.com/nteract/nteract/commit/481836bb3fbea30efa8219613930d1a2845920ed))
- declare display capabilities (#3003) *(mcp-app)*([d62ce68](https://github.com/nteract/nteract/commit/d62ce68416ead0b39a7d9b522cbd0aaf843efc46))
- preview blob output summaries (#2998) *(mcp-app)*([c844ee9](https://github.com/nteract/nteract/commit/c844ee943ecc111f6dba3257f5c33ed4a5c74148))
- preserve MCP size dimensions (#3000) *(renderer)*([3f83276](https://github.com/nteract/nteract/commit/3f83276b476dc9a9fa6277dcf0108dfa3675f156))
- segment mixed output frames (#3001) *(renderer)*([6276bb2](https://github.com/nteract/nteract/commit/6276bb2831004e7d07439fefea8d47d21b53b8e5))
- clarify output summary reads (#3002) *(mcp)*([06a2547](https://github.com/nteract/nteract/commit/06a2547640be5f68dbe93b1f14bd1a4e1a662354))
- restore synced pool targets on startup (#3009) *(runtimed)*([a44cb21](https://github.com/nteract/nteract/commit/a44cb21a548de727652d1788ccf4923ed22780d1))
- seed viewer theme before stylesheet (#3007) *(notebook-cloud)*([faf5fd2](https://github.com/nteract/nteract/commit/faf5fd25b6ef66a15a24afd033c6f36531230ac4))
- apply host container dimensions (#3008) *(mcp-app)*([c8084db](https://github.com/nteract/nteract/commit/c8084db2e72ba0c7ddf1236a3f1cdc3f89af92bb))
- keep LLM previews out of MIME selection (#3011) *(renderer)*([5b85903](https://github.com/nteract/nteract/commit/5b85903851a39a9f0e93f99c62f81e274f50de34))
- respect host frame CSP (#3012) *(mcp-app)*([e47811e](https://github.com/nteract/nteract/commit/e47811e19ae422537cec01cdadadcd197445e0b7))

### Documentation

- explain why daemon.json fallback stays (#2775) *(runtimed-client)*([ea708db](https://github.com/nteract/nteract/commit/ea708db8b42ed5da2085e46eb190838f87bd82f1))
- update execution-id runtime-state plan (#2800) *(runtime)*([6435f32](https://github.com/nteract/nteract/commit/6435f32b12cd9a6ab357ae1ad3c1e6d038086e4b))
- identity and trust for notebook rooms (#2801) *(architecture)*([b2cf3c8](https://github.com/nteract/nteract/commit/b2cf3c828f5750361c787637acd92da095e18ced))
- refine automerge fork patch plan (#2802) *(architecture)*([b948a25](https://github.com/nteract/nteract/commit/b948a25b1950e8379024008056ca8083a70e2064))
- four desktop ADRs + cleanup punchlist (#2813) *(architecture)*([4c99876](https://github.com/nteract/nteract/commit/4c998766a8d788e42e75a43de7133bbcc9a812a1))
- inline cleanup pass [stack 1/6] (#2816) *(architecture)*([2b38fea](https://github.com/nteract/nteract/commit/2b38feaa83f3051aff760db42c0a7e7127764056))
- four desktop ADRs + execution-liveness memo [stack 4/6] (#2819) *(architecture)*([aaca969](https://github.com/nteract/nteract/commit/aaca969cd49f7fd6fc7c91ba09d914bc49827954))
- punchlist WP-12 — replace hand-mirrored TS table with Rust source of truth *(architecture)*([14d6f2a](https://github.com/nteract/nteract/commit/14d6f2a6c16b5ab95db78a13b6c2c9cdbd06e504))
- punchlist WP-12 — single-source the TS frame-size table (#2841) *(architecture)*([a213859](https://github.com/nteract/nteract/commit/a2138598b1a3112d43a307d4c095c53558b47419))
- define hosted room authorization *(notebook-cloud)*([37a42f2](https://github.com/nteract/nteract/commit/37a42f2c5280414f4aef55da25c7f71a308d43d5))
- define hosted room authorization (#2866) *(notebook-cloud)*([c8a95d8](https://github.com/nteract/nteract/commit/c8a95d854b1b263076e593026cd618ec8baccb61))
- add hosted credential transport ADR *(auth)*([cbd2649](https://github.com/nteract/nteract/commit/cbd2649da418a3df32070bc39abcf279cfbef6d1))
- address hosted credential review *(auth)*([a7d800a](https://github.com/nteract/nteract/commit/a7d800ad3134b4bbb7e4a5e83bc7b908287bea62))
- clarify websocket credential risks *(auth)*([2b8d18b](https://github.com/nteract/nteract/commit/2b8d18b35fbfa5310f50aafd41ae18008bfddcd1))
- tighten ticket and subprotocol guidance *(auth)*([6cb0c64](https://github.com/nteract/nteract/commit/6cb0c647325e0b23c11483bd828427fb74f93586))
- require single credential source *(auth)*([a1110b1](https://github.com/nteract/nteract/commit/a1110b130c0e3824c46cd7bed318f285d7d3ac82))
- add hosted credential transport ADR (#2886) *(auth)*([5f98689](https://github.com/nteract/nteract/commit/5f98689a62060e2c16dbf8adbcb91c84b2fb7f23))
- add output protocol ADRs *(protocol)*([825023b](https://github.com/nteract/nteract/commit/825023b68f339a2c4dad1cdee8dd2c424dbbb221))
- add output protocol ADRs (#2892) *(protocol)*([225d709](https://github.com/nteract/nteract/commit/225d709ab8e2fc2f7f6791fd73d8c88c98ddeb1f))
- tighten output ADR wording *(protocol)*([b996ef8](https://github.com/nteract/nteract/commit/b996ef8d372ac9b078afc3ebdd0448630485b8df))
- tighten output ADR wording (#2895) *(protocol)*([71fbb15](https://github.com/nteract/nteract/commit/71fbb1588ff96294ede6b320b574a7ea216d83bf))
- align Access trial runbook *(notebook-cloud)*([bb48c65](https://github.com/nteract/nteract/commit/bb48c652786d21f69274f13fd97e2e7b10a81be3))
- list Access trial blockers *(notebook-cloud)*([dfcf636](https://github.com/nteract/nteract/commit/dfcf6366db3b7ea8fbba84c62ecfccec74479e97))
- align Access trial runbook (#2900) *(notebook-cloud)*([a4425e3](https://github.com/nteract/nteract/commit/a4425e30a58795c4954942f1327fa3d85ad32c81))
- define hosted deployment topology *(architecture)*([431d264](https://github.com/nteract/nteract/commit/431d26495285198e22687ebbf796fcccd59e4ad5))
- address topology review *(architecture)*([99e89ea](https://github.com/nteract/nteract/commit/99e89eaf3440bc26571c1670dca0ca2d069a2c99))
- clarify runtime topology *(architecture)*([1ebd732](https://github.com/nteract/nteract/commit/1ebd7328693640bd879479237a0b37641cb88357))
- define hosted deployment topology (#2904) *(architecture)*([22f2fbf](https://github.com/nteract/nteract/commit/22f2fbf3d2f9c693e11955ca52c9a37156ad0b4a))
- design runtime redaction refresh *(runtime)*([3669348](https://github.com/nteract/nteract/commit/3669348f2a747e1790ef21936058599aa1c6e24f))
- clarify redaction refresh model *(runtime)*([e527ff3](https://github.com/nteract/nteract/commit/e527ff355e4625a7090c91b11f59d1a69ff57b69))
- audit runtime peer and blob authority *(architecture)*([a3f73b9](https://github.com/nteract/nteract/commit/a3f73b95a38cefae827f0b1554f7ab4aee4af6d8))
- audit runtime peer and blob authority (#2909) *(architecture)*([3e78d42](https://github.com/nteract/nteract/commit/3e78d42bdcb730daa465bf663e85df0114b4a5fb))
- update redaction boundary ADR *(architecture)*([64bf25a](https://github.com/nteract/nteract/commit/64bf25acfc68970c37b59c3508e3e6b3c456672f))
- clarify python redaction scope *(architecture)*([0e7cb07](https://github.com/nteract/nteract/commit/0e7cb0777106d085f75dd6e00fd419c44273dbde))
- clarify room authority boundaries *(architecture)*([3e294e3](https://github.com/nteract/nteract/commit/3e294e325631f7ce0ae7cfe37b9507894ab4111a))
- clarify room authority boundaries (#2915) *(architecture)*([7d613d0](https://github.com/nteract/nteract/commit/7d613d03d21f9aac779917d9e380a542b2ae1e09))
- define captured env lifecycle *(architecture)*([ad359ba](https://github.com/nteract/nteract/commit/ad359bafca7f61e6caeadf2588fa6f63217d6732))
- clarify conda captured env hash inputs *(architecture)*([29ba8be](https://github.com/nteract/nteract/commit/29ba8be702e043e020f1fdbaa2dd310dacf55a8a))
- clarify captured env fallback tradeoffs *(architecture)*([1f41a47](https://github.com/nteract/nteract/commit/1f41a479167dad223d7d18e7c634e65f08ee3763))
- define captured environment lifecycle (#2914) *(architecture)*([dc1d8d4](https://github.com/nteract/nteract/commit/dc1d8d4757ee63a47cf4df9a8bdef17a5b0f7ce9))
- define hosted output origin isolation *(notebook-cloud)*([b889e41](https://github.com/nteract/nteract/commit/b889e41df3892e0284e91630e87425474cdafd92))
- clarify output isolation prior art *(notebook-cloud)*([837fa1b](https://github.com/nteract/nteract/commit/837fa1bdec370284e0218c13e3f7a45063c6a191))
- address hosted output review notes *(notebook-cloud)*([035abf6](https://github.com/nteract/nteract/commit/035abf689e3afd0c977273e96d539dadc2018ae4))
- define hosted output origin isolation (#2941) *(notebook-cloud)*([356efcb](https://github.com/nteract/nteract/commit/356efcbe5e5860fd813d5e3cc3b41db601e00606))
- clarify Access workers.dev setup *(notebook-cloud)*([118ab19](https://github.com/nteract/nteract/commit/118ab1902d8f1b2f86ce7a125d517153832982d7))
- clarify Access workers.dev setup (#2947) *(notebook-cloud)*([1c96ffe](https://github.com/nteract/nteract/commit/1c96ffe50222097332e6471e2f5964d292bd6813))
- define resource addressing *(mcp)*([b03ff83](https://github.com/nteract/nteract/commit/b03ff833f71b6a7053753b335f82796b400aee29))

### Features

- redact environment values from outputs (#2610) *(runtime)*([c7bf704](https://github.com/nteract/nteract/commit/c7bf704352a8e1b3f0623a181f1cd38412e6d052))
- import login-shell env into kernels via per-launch env_vars (#2767) *(runtimed)*([e73be9d](https://github.com/nteract/nteract/commit/e73be9df47f29ac3cea507499a6fda63ac4f3fc4))
- make runtime state execution id only (#2773) *(runtime)*([811dbcf](https://github.com/nteract/nteract/commit/811dbcfdca0f183f304e60cd750090af40389beb))
- materialize execution view in wasm (#2774) *(runtime)*([c53819c](https://github.com/nteract/nteract/commit/c53819ca220a416c4c78a46eeff535eb848046e9))
- route interaction_state over JSON-RPC (#2783) *(isolated)*([792b683](https://github.com/nteract/nteract/commit/792b6836eccf47660b639a16f221eddce1e68dfb))
- expose execution view snapshots (#2782) *(runtimed-node)*([6536a19](https://github.com/nteract/nteract/commit/6536a1991a50c3cb94219bb1e1d2129fb2b9043f))
- add embed host context bridge (#2790) *(isolated)*([798ea01](https://github.com/nteract/nteract/commit/798ea01975ceecfb996c4b96c7171c9fe177da24))
- add embeddable output surface (#2796) *(isolated)*([a30a18d](https://github.com/nteract/nteract/commit/a30a18d11a29febb903cd0ada391e15e9a6347c9))
- add output embed deck harness (#2797) *(slidev)*([7288868](https://github.com/nteract/nteract/commit/7288868f54b45f8593df0d7fb02a18c10b4d98b6))
- add nteract identity crate (#2803) *(identity)*([f953446](https://github.com/nteract/nteract/commit/f95344678b1480d9c4170b4072afdc0aba811c5e))
- expose frame size limits (#2805) *(runtimed)*([c6f91a7](https://github.com/nteract/nteract/commit/c6f91a7a871839e9a8f71d444f1fd0cb6f46a617))
- share blob resolvers (#2807) *(runtimed)*([1c04419](https://github.com/nteract/nteract/commit/1c044190ccf951fed56a15f259b8e13b2cded83d))
- expose presence cbor helpers (#2806) *(wasm)*([87728d1](https://github.com/nteract/nteract/commit/87728d1561842e655375130e6c8cc4edfcde0b4e))
- load notebook snapshot pairs (#2808) *(wasm)*([25e14bf](https://github.com/nteract/nteract/commit/25e14bf38fd16dd9ec3b237d87f67bd54d1baea5))
- materialize hosted snapshot pairs (#2809) *(notebook-cloud)*([0cd8f19](https://github.com/nteract/nteract/commit/0cd8f1914bf630b261136295134b125195a1fccf))
- render published outputs through shared iframe (#2810) *(notebook-cloud)*([11f2e3b](https://github.com/nteract/nteract/commit/11f2e3bdbbc3b428d516ce714dfac56602660672))
- configure plugin asset base (#2812) *(renderer)*([0440483](https://github.com/nteract/nteract/commit/0440483e87ce6cf330a0496d1286c4fa8018714b))
- use shared notebook viewer surface (#2815) *(notebook-cloud)*([fbdf74b](https://github.com/nteract/nteract/commit/fbdf74b9c671d83e780b207215be0d53d3d1e21b))
- default nteract launcher (#2821) *(settings)*([d8d6130](https://github.com/nteract/nteract/commit/d8d6130de29dbe83322012a8cb08e64537bd60a6))
- use read-only CodeMirror source (#2824) *(notebook-cloud)*([521a9f9](https://github.com/nteract/nteract/commit/521a9f9cd0ffdcc765204f7e092c7dee07d1d87f))
- stream blob HTTP reads from disk [stack 6/6] (#2823) *(runtimed)*([c346ca2](https://github.com/nteract/nteract/commit/c346ca23e2ab3d1d424764936a86ba5fb77949b7))
- publish live snapshot pairs *(notebook-cloud)*([0fa33e0](https://github.com/nteract/nteract/commit/0fa33e03f12f46e45208c2f40ef14397e62e5e85))
- split renderer asset origin *(notebook-cloud)*([4f9b029](https://github.com/nteract/nteract/commit/4f9b02927e5317142797b049b513b0f16d180919))
- publish live snapshot pairs (#2825) *(notebook-cloud)*([5bc09ca](https://github.com/nteract/nteract/commit/5bc09ca186893e8d45f1c8d724cc081d5cc8c799))
- split renderer asset origin (#2827) *(notebook-cloud)*([656837f](https://github.com/nteract/nteract/commit/656837f2ce774b5096e09ef507b24e70bcd5ae6b))
- share read-only notebook cells *(notebook-cloud)*([8888c63](https://github.com/nteract/nteract/commit/8888c63d11c2f898b339538cbff72f9e3775f78a))
- share read-only notebook cells (#2833) *(notebook-cloud)*([7389efa](https://github.com/nteract/nteract/commit/7389efa124a60fdd8ce04124a7403879bb636bee))
- share read-only notebook view *(notebook-cloud)*([45bedef](https://github.com/nteract/nteract/commit/45bedefdbf5679f663f2727389da78b19b51ce0b))
- share read-only notebook view (#2840) *(notebook-cloud)*([eddab85](https://github.com/nteract/nteract/commit/eddab8523990037244c901a102105dc306a65dd3))
- attach cell provenance to rich errors *(tracebacks)*([b3bc84b](https://github.com/nteract/nteract/commit/b3bc84b3fa8a203b4b7e533b3c43c7d7ea5c58a3))
- attach execution provenance to rich errors (#2843) *(tracebacks)*([7f42d6b](https://github.com/nteract/nteract/commit/7f42d6b832f92817e586b735fa1c81afa86dc2b7))
- add report viewer mode *(notebook-cloud)*([276ee85](https://github.com/nteract/nteract/commit/276ee855ce8f28259e9b0c39567b5ab1cb885d14))
- add report viewer mode (#2844) *(notebook-cloud)*([80609cb](https://github.com/nteract/nteract/commit/80609cb0e89152f083eb5cf6492234f92bf15a54))
- show viewer presence status *(notebook-cloud)*([4003970](https://github.com/nteract/nteract/commit/400397077b9e39b3d84d20350f75f2568d0523ec))
- show viewer presence status (#2848) *(notebook-cloud)*([0c31f09](https://github.com/nteract/nteract/commit/0c31f09d37f32c2973c54b51d9aa7ad3f1acdae1))
- link frames to notebook cells *(traceback)*([cfc4da8](https://github.com/nteract/nteract/commit/cfc4da8c63c9a0adc8a80cef9867511540158e58))
- link frames to notebook cells (#2847) *(traceback)*([54e6e2b](https://github.com/nteract/nteract/commit/54e6e2b79fee6afd1b0d51a56f5a02ad9918f86b))
- segment mixed output rendering *(traceback)*([1e1ae09](https://github.com/nteract/nteract/commit/1e1ae090daf97b7d662d9415d7e46a8e078c21c1))
- segment mixed output rendering (#2853) *(traceback)*([f2e8119](https://github.com/nteract/nteract/commit/f2e811907d263a1fe7f46ccd009412e4654af1c5))
- gate rooms with ACL authorization *(notebook-cloud)*([baec2c3](https://github.com/nteract/nteract/commit/baec2c3d477b20fd88f99b4eb778761456c1e6b3))
- gate rooms with ACL authorization (#2867) *(notebook-cloud)*([bda65c5](https://github.com/nteract/nteract/commit/bda65c5ec26008ee65d55a1f9b34682edec0930d))
- materialize room sync in durable objects *(notebook-cloud)*([1e3b158](https://github.com/nteract/nteract/commit/1e3b158faf6f53d3b5aec588697c54df171ad294))
- materialize room sync in durable objects (#2868) *(notebook-cloud)*([abf3972](https://github.com/nteract/nteract/commit/abf39726465d585456bd5e60ef88f3fe992e11a3))
- authenticate Cloudflare Access JWTs *(notebook-cloud)*([3d6898d](https://github.com/nteract/nteract/commit/3d6898d2803091792bbc581f10e325eb9c24f375))
- authenticate Cloudflare Access JWTs (#2869) *(notebook-cloud)*([bc36013](https://github.com/nteract/nteract/commit/bc36013b01ab62d567d890fe285062d6f54c4127))
- limit editor room edits to markdown *(notebook-cloud)*([70ebfaf](https://github.com/nteract/nteract/commit/70ebfaf2e55feae97af3bd7b99169435f1b1734f))
- limit editor room edits to markdown (#2870) *(notebook-cloud)*([a62e52b](https://github.com/nteract/nteract/commit/a62e52b526ed79468d2ea86d426a801c2914f2f1))
- add runtime peer ingress handle *(notebook-cloud)*([54a9412](https://github.com/nteract/nteract/commit/54a94121eb6ef196ffca831d4ade967b674a39ba))
- add runtime peer ingress handle (#2871) *(notebook-cloud)*([c60bbe7](https://github.com/nteract/nteract/commit/c60bbe7c4904b775765be294de030a1c27394073))
- wire live markdown collaboration *(notebook-cloud)*([fbfe6ef](https://github.com/nteract/nteract/commit/fbfe6ef5ff3f05461a1864d4563652b30aa65001))
- wire live markdown collaboration (#2873) *(notebook-cloud)*([9d214fb](https://github.com/nteract/nteract/commit/9d214fbb70664ca087daf5c7882539b0c52dce6d))
- add owner ACL management routes *(notebook-cloud)*([d179463](https://github.com/nteract/nteract/commit/d179463d677583f6ac2eeee86d2dfb834fbc1546))
- add owner ACL management routes (#2872) *(notebook-cloud)*([52cc059](https://github.com/nteract/nteract/commit/52cc059330e9f76618406ed61bb6be15fd9e4845))
- expose hosted session metadata *(notebook-cloud)*([a2f4565](https://github.com/nteract/nteract/commit/a2f456537375317c74288d71be34a4a8786b7020))
- expose hosted session metadata (#2891) *(notebook-cloud)*([28b3ef5](https://github.com/nteract/nteract/commit/28b3ef5c9f97c4c0ac4529a31b69d6957aa2df0a))
- add Access demo ops runbook *(notebook-cloud)*([39256df](https://github.com/nteract/nteract/commit/39256dfcff99be570faceb86eec71a95ed37ea6c))
- add Access demo ops runbook (#2890) *(notebook-cloud)*([c98bf5b](https://github.com/nteract/nteract/commit/c98bf5bc04ed5760b97f611a38269c6c0e0f3c32))
- replace table data in place *(sift)*([c619a42](https://github.com/nteract/nteract/commit/c619a42258b344fc27a4a01352a2d6043690e782))
- replace table data in place (#2903) *(sift)*([b75ed0e](https://github.com/nteract/nteract/commit/b75ed0ec0fa7c941ded9652153b7144d5a5ce2f2))
- add sharing invite storage *(notebook-cloud)*([f8b90b2](https://github.com/nteract/nteract/commit/f8b90b2a677d0e6ef040261048d468c5a59b7d7b))
- add sharing invite storage (#2939) *(notebook-cloud)*([b9676f8](https://github.com/nteract/nteract/commit/b9676f884031b4ebfe65ee687b9899c15774e641))
- support hosted output document URLs *(notebook-cloud)*([48a61fd](https://github.com/nteract/nteract/commit/48a61fd9242b0e0e4778f090342a6d69c6e12583))
- support hosted output document URLs (#2942) *(notebook-cloud)*([a65d124](https://github.com/nteract/nteract/commit/a65d12446adae56e979e29bea93381213052a795))
- resolve Access invites on login *(notebook-cloud)*([0a2b23f](https://github.com/nteract/nteract/commit/0a2b23f3bf74a3ddac6fed05756dfa6f8a8a55fc))
- resolve Access invites on login (#2944) *(notebook-cloud)*([bdd5cd7](https://github.com/nteract/nteract/commit/bdd5cd7d755e3f6925f87651226e7709f749afcf))
- add owner invite routes *(notebook-cloud)*([11b6c04](https://github.com/nteract/nteract/commit/11b6c046546ff106c13623ee85aceeb7fb8ceb8d))
- add owner invite routes (#2945) *(notebook-cloud)*([0b6532c](https://github.com/nteract/nteract/commit/0b6532c2db091c61fc012269859f246ca5233483))
- adapt structured output for shared renderer *(mcp-app)*([7f9ed9c](https://github.com/nteract/nteract/commit/7f9ed9c7c4551f21b443a2b9266cf0f077be6d25))
- adapt structured output for shared renderer (#2958) *(mcp-app)*([7424ffd](https://github.com/nteract/nteract/commit/7424ffd5ba76f7b2576e1dd7fba216d271a049ed))
- isolate output document origin *(notebook-cloud)*([bebd4bd](https://github.com/nteract/nteract/commit/bebd4bdf500557e53b90d757cf60b746646570b1))
- isolate output document origin (#2959) *(notebook-cloud)*([384ca6f](https://github.com/nteract/nteract/commit/384ca6f096c60f29f3d53c0b5228e18400010fb1))
- render through shared output frame *(mcp-app)*([e3a6bbe](https://github.com/nteract/nteract/commit/e3a6bbe256916f8b3db80fb4be00695783eaefcc))
- render through shared output frame (#2960) *(mcp-app)*([ed73a13](https://github.com/nteract/nteract/commit/ed73a133153b4976041d5728473feecd8a1db8bd))
- expose notebook cell resources *(mcp)*([929caa0](https://github.com/nteract/nteract/commit/929caa00755a0af18de34f5408f18fe94eb64146))
- annotate notebook resources (#2972) *(mcp)*([c9e9483](https://github.com/nteract/nteract/commit/c9e9483a4dbbf3783aa08063026a3602c3574e5f))

### Performance

- defer optional renderer imports *(kernel-launcher)*([15ab3ba](https://github.com/nteract/nteract/commit/15ab3bafe7aba3beee0fbd334d9ae5cd2a3bb267))
- defer optional renderer imports (#2887) *(kernel-launcher)*([6c2090e](https://github.com/nteract/nteract/commit/6c2090e7343e7ef4261aa4bd69e797359c89b456))
- optimize output redaction matching *(runtime)*([54020a4](https://github.com/nteract/nteract/commit/54020a41fd91d600c6f041949832f6a41283a0ba))
- cache output redaction candidates *(kernel-launcher)*([f037695](https://github.com/nteract/nteract/commit/f0376956005a37b5de5f109906855e6d09cacede))
- cache output widget replay resolution *(runtimed)*([c2299c6](https://github.com/nteract/nteract/commit/c2299c6ced904843e6f74ef3733d42715530f37f))
- type inbound comm messages *(protocol)*([054fd06](https://github.com/nteract/nteract/commit/054fd069048eaeda451c3e70303530d00a999075))
- externalize inbound comm buffers *(protocol)*([c453b56](https://github.com/nteract/nteract/commit/c453b561af13aeeebce6d5dfca6624c9d2c31ec1))
- queue ordinary output commits *(runtimed)*([ba89ba3](https://github.com/nteract/nteract/commit/ba89ba30c8a2d33e3d2c839772ba8722a027da75))
- batch display output commits *(runtimed)*([b816c43](https://github.com/nteract/nteract/commit/b816c43033b99bf6bb49c801c41fda6e80134229))
- optimize display update output lookup *(runtime)*([a2bfef0](https://github.com/nteract/nteract/commit/a2bfef02caa45407e34dfce73a9930ac6fb8d558))
- cache output order metadata (#2967) *(runtime-doc)*([7f3503a](https://github.com/nteract/nteract/commit/7f3503a4862e52d5e2743e6385f0f461c9a02a29))
- avoid full state reads in agent sync (#2973) *(runtime)*([614ec94](https://github.com/nteract/nteract/commit/614ec9469fcae95316aa1d7c6665dcb96c3d1cd7))
- remove dormant display update overlay (#2980) *(notebook)*([3c18ce8](https://github.com/nteract/nteract/commit/3c18ce8f75ff94aa13b959659686d6d7202fdd0e))
- update output id diff snapshot in place (#2979) *(wasm)*([038caec](https://github.com/nteract/nteract/commit/038caec285047077419d6f34cbea58a5a3b6831c))
- split structural output updates (#2984) *(notebook)*([64247dd](https://github.com/nteract/nteract/commit/64247dd828eccce59805ae5ed2f8576794d537ef))
- reduce streaming table rerenders (#2988) *(frontend)*([730b522](https://github.com/nteract/nteract/commit/730b5220c8866e7033a92543b3b31d3f645aa09d))

## Frequency / raw counts
- total bullets across the series: 75 features, 182 fixes, 16 performance, 47 documentation

---

# ENTRY 2.4  (grouped)
- coversVersions: 2.4.0, 2.4.1, 2.4.2, 2.4.4, 2.4.5, 2.4.6, 2.4.7, 2.4.8
- note: covers 2.4.0–2.4.8; 2.4.3 was skipped
- date (latest stable in series, ISO): 2026-05-14T23:34:16Z
- dateLabel (human range): May 2–14, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.4.8-stable.202605142308
- perVersionReleaseUrls:
    - 2.4.8 -> https://github.com/nteract/nteract/releases/tag/v2.4.8-stable.202605142308
    - 2.4.7 -> https://github.com/nteract/nteract/releases/tag/v2.4.7-stable.202605120217
    - 2.4.6 -> https://github.com/nteract/nteract/releases/tag/v2.4.6-stable.202605082015
    - 2.4.5 -> https://github.com/nteract/nteract/releases/tag/v2.4.5-stable.202605050448
    - 2.4.4 -> https://github.com/nteract/nteract/releases/tag/v2.4.4-stable.202605050246
    - 2.4.2 -> https://github.com/nteract/nteract/releases/tag/v2.4.2-stable.202605021825
    - 2.4.1 -> https://github.com/nteract/nteract/releases/tag/v2.4.1-stable.202605020648
    - 2.4.0 -> https://github.com/nteract/nteract/releases/tag/v2.4.0-stable.202605020205

## Technical changelog (faithful)
### 2.4.8 — May 14, 2026
### Bug Fixes

- stop phantom renderer-plugins rebuilds (#2729) *(xtask)*([cd2e5b7](https://github.com/nteract/desktop/commit/cd2e5b7647788e1d493f229df5ae8664128a798f))
- prioritize kernel lifecycle signals (#2728) *(runtimed)*([e083540](https://github.com/nteract/desktop/commit/e083540f046c0cf09ff125c6f9d348f9a5dd94fe))
- coalesce display updates off iopub path (#2734) *(runtimed)*([1293d2d](https://github.com/nteract/desktop/commit/1293d2d17e804c4a758c15b55c4de720dbeed56d))
- bump crates/notebook/Cargo.toml to break update loop (#2735) *(release)*([ab85a4c](https://github.com/nteract/desktop/commit/ab85a4c1c0c891969e6999c47a97752b65b6e9bd))
- preserve null widget state values (#2736) *(wasm)*([967b82b](https://github.com/nteract/desktop/commit/967b82bcbf788081c4702dcf3cd543a8285e98fa))
- tolerate no internet for uv:pyproject kernel launches (#2740) *(runtimed)*([4aae1a3](https://github.com/nteract/desktop/commit/4aae1a3ccd2c57beb1573d04e4f1576b37726281))
- tolerate no internet for pixi:toml kernel launches (#2745) *(runtimed)*([3c948bc](https://github.com/nteract/desktop/commit/3c948bca837758a347d1cf24dbae7b8156e92416))
- disable macos sccache for release builds (#2748) *(ci)*([401fcd0](https://github.com/nteract/desktop/commit/401fcd0d7a8163a6890cfe4c9686a5c3932f6daa))
- keep rooms resident after kernel teardown (#2750) *(runtimed)*([81c7381](https://github.com/nteract/desktop/commit/81c7381e8fba1d69dcbecab1cd8e52cbb79cfe51))
- repair macos rustup shims in releases (#2759) *(ci)*([ce601b0](https://github.com/nteract/desktop/commit/ce601b059d1cad03fdb70b59691601ea2623cad2))
- unblock headless conda/uv kernels stuck on AwaitingTrust (#2760) *(runtimed)*([2bd0b42](https://github.com/nteract/desktop/commit/2bd0b4270a1b48611079f3e3181497fb86950d49))

### Documentation

- clarify display update wake semantics (#2737) *(runtimed)*([60eb239](https://github.com/nteract/desktop/commit/60eb239f09f2832b8190cb5d048afc82344b4d85))

### Features

- add one-shot PutBlob uploads (#2739) *(protocol)*([d4c0450](https://github.com/nteract/desktop/commit/d4c0450fe4526f5873d616ee4918c68859dbe748))
- add PutBlob one-shot clients (#2742) *(protocol)*([bf22688](https://github.com/nteract/desktop/commit/bf226882b559f9ee7b443b2b910c793676a49472))
- round-trip frontend binary widget state via PutBlob (#2744) *(widgets)*([dcbd1e7](https://github.com/nteract/desktop/commit/dcbd1e7c550a2bea2c59dfd74d5d3280a47af566))
- add ephemeral durability hint (#2746) *(blob-store)*([103ab8b](https://github.com/nteract/desktop/commit/103ab8be420a91c56dced95db44a54f4fef59b87))
- drop legacy sendUpdate buffers + free superseded ephemeral blobs (#2747) *(widgets)*([dedb179](https://github.com/nteract/desktop/commit/dedb179dfac536ea0b8a7ca7de5e08763bee9320))
- reap resumable rooms with combined registry + LRU cap (#2752) *(runtimed)*([82c6b94](https://github.com/nteract/desktop/commit/82c6b94e4a0a81d38136c936a654b2f569fdf916))
- add PutBlob multipart uploads (#2753) *(runtimed)*([83579d6](https://github.com/nteract/desktop/commit/83579d660c4a74139fdffda8e2a553eb2154dfe7))

### 2.4.7 — May 12, 2026
### Bug Fixes

- use codex-local nteract MCP config (#2613) *(plugins)*([0d9d14d](https://github.com/nteract/desktop/commit/0d9d14d5cb526028abf5a8da3fbd344abeb300b2))
- resume runtimed binding publishing (#2614) *(release)*([a1a3b33](https://github.com/nteract/desktop/commit/a1a3b33b3cff4b7436c530372d1eb87333a86522))
- keep tail outputs reachable (#2617) *(notebook)*([e8de12a](https://github.com/nteract/desktop/commit/e8de12a51ce75b186faba047440e2adf98194cb6))
- strip RUNTIMED_* from inherited env on child spawn (#2618) *(runt-mcp-proxy)*([a8713e1](https://github.com/nteract/desktop/commit/a8713e1ca6cf19068bfb5ddae36d1cbe0989ed63))
- rebuild runtimed-wasm on rebuild=true (#2619) *(mcp-supervisor)*([623bee6](https://github.com/nteract/desktop/commit/623bee6534075a3d969e518230c87607da447bf5))
- load frozen automerge genesis docs (#2620) *(sync)*([e3871c0](https://github.com/nteract/desktop/commit/e3871c015694bd7392a13ffc08f65d4b16732172))
- preserve image-cell <img> across focus toggle (#2626) *(sift)*([783dbfe](https://github.com/nteract/desktop/commit/783dbfe135a5ec3531cbf6caf17e64da003c1281))
- theme scrollbar corner (#2627) *(sift)*([eb459b4](https://github.com/nteract/desktop/commit/eb459b4c6e58140f31466e5de538a6602a9e9168))
- enable Tauri CSP (#2633) *(notebook)*([9001a81](https://github.com/nteract/desktop/commit/9001a81de99dd5bd67a6c6e5751acd2dc642a7f8))
- scope auxiliary window capabilities (#2631) *(security)*([7432ba2](https://github.com/nteract/desktop/commit/7432ba2bfaf90714619c7b9dfd3db89f06a03cb3))
- tolerate heartbeat misses and drop dx injection (#2634) *(runtime)*([374f411](https://github.com/nteract/desktop/commit/374f411d5b0c38dae2820290f43386c9138ad816))
- allow isolated iframe scripts in CSP (#2637) *(notebook)*([8e2b012](https://github.com/nteract/desktop/commit/8e2b012f45ee11031a4562e6ada67e6c521bbfe7))
- load output frames from custom scheme (#2643) *(notebook)*([4f4a276](https://github.com/nteract/desktop/commit/4f4a27653b2723f838c9ec4215fecff7e3f5182b))
- hide chrome for small outputs (#2648) *(notebook)*([02b7a10](https://github.com/nteract/desktop/commit/02b7a10c943a58a401840f5d092bc61ffd364e1d))
- refine history search shortcut (#2649) *(notebook)*([eea9e59](https://github.com/nteract/desktop/commit/eea9e5940cff537bc13363d7bc13db7bdf76f103))
- keep output visibility toggle (#2650) *(notebook)*([887894d](https://github.com/nteract/desktop/commit/887894dad11f05bff111dff2dff6f5eb96bed308))
- cache-bust wasm plugin loads (#2651) *(sift)*([b7387ce](https://github.com/nteract/desktop/commit/b7387ce4b39f1c218872af9e759a8559d8d0ce5e))
- keep wasm cache bust focused (#2652) *(sift)*([373601c](https://github.com/nteract/desktop/commit/373601c75eeb1ab211952741ef4348a6d3085bb9))
- hash daemon plugin asset urls (#2654) *(mcp-app)*([af464b3](https://github.com/nteract/desktop/commit/af464b3bdf271ace040fee6d2dfb82f2b13b33f6))
- polish scroll handoff cue (#2664) *(sift)*([825101f](https://github.com/nteract/desktop/commit/825101f68c7210793627a0bf1752a721111c5ba2))
- retry recoverable automerge receive failures (#2666) *(sync)*([b5a2d9e](https://github.com/nteract/desktop/commit/b5a2d9ef6b150a97c699c65cc2f7d5d0a062cc40))
- pin maturin develop to active venv (#2670) *(build)*([5efdaf1](https://github.com/nteract/desktop/commit/5efdaf1ad37c701cd22788a10fbb78f722a78424))
- wait for selected pool readiness (#2674) *(onboarding)*([16ff958](https://github.com/nteract/desktop/commit/16ff9584839709ab26a0392a5ea7604f944758b4))
- skip quiescence wait for one-shot sync (#2673) *(settings)*([19e8a32](https://github.com/nteract/desktop/commit/19e8a3239119b7e522339719385111d68b2ecbb2))
- recover patch-log mismatch from JSON (#2677) *(settings)*([6d31974](https://github.com/nteract/desktop/commit/6d3197406d0e6b250a4d12b926a0b5f156aca0ee))
- clear execution state on interrupt *(runtime)*([caf4f80](https://github.com/nteract/desktop/commit/caf4f80c005da0d68ba60805d38d60616d63623a))
- retry busy Windows named pipes (#2697) *(protocol)*([347b97e](https://github.com/nteract/desktop/commit/347b97e903befb509149d7a9873eb0f765332b8a))
- coalesce noisy stream output flushes (#2700) *(runtimed)*([a6aca2f](https://github.com/nteract/desktop/commit/a6aca2f740eb3c052bc19e19c6e4ba58f9107056))
- resolve execution results through daemon (#2701) *(runtimed)*([3f0b14c](https://github.com/nteract/desktop/commit/3f0b14cdd240c4bba19da6d4304da73bd96b02ed))
- scale scroll geometry past browser max element height (#2702) *(sift)*([edb82d6](https://github.com/nteract/desktop/commit/edb82d6ece7e431a151559f7b4359312d54fe9cc))
- drop App.tsx setDaemonCommSender export to restore HMR (#2703) *(notebook)*([f5f700f](https://github.com/nteract/desktop/commit/f5f700fb69f1a3f26b24ed0c748188318f6d568c))
- probe Vite over localhost instead of 127.0.0.1 (#2704) *(supervisor)*([e9943b0](https://github.com/nteract/desktop/commit/e9943b04fbb66403681a38d730cc9d3dcd00cd2e))
- return store batch initialization errors (#2706) *(sift)*([090e08c](https://github.com/nteract/desktop/commit/090e08c599aa5102649ec3a6d2df02688e5122e6))
- rebuild renderer plugins when workspace sources change (#2708) *(notebook)*([e72d38d](https://github.com/nteract/desktop/commit/e72d38dd28775417d319603163c2e78500651a2f))
- include arrow-stream-manifest MIME in sift predicates (#2710) *(notebook)*([7805edc](https://github.com/nteract/desktop/commit/7805edcd4484d74482ac39ded3d16db6f66e2b43))
- keep sift focus until click-elsewhere, not pointer-out (#2711) *(notebook)*([99f549d](https://github.com/nteract/desktop/commit/99f549dffa8bc7c8288a8ee1460d0f947eabb46e))
- narrow arrow manifest gc collection (#2712) *(outputs)*([4cba309](https://github.com/nteract/desktop/commit/4cba3097031af7cbca30072242e6f54ddef8ea01))
- drop atomic iframe selection (#2719) *(isolated)*([a3e57da](https://github.com/nteract/desktop/commit/a3e57da08dfa38b16242f7f93e4a6e4cf15bc30c))
- drop scroll-to-deactivate on focused sift (#2721) *(outputs)*([b1fe19e](https://github.com/nteract/desktop/commit/b1fe19e6dbcc59e244d717ac516cc7271853d668))
- keep Arrow LLM text canonical (#2718) *(outputs)*([a7e9b1c](https://github.com/nteract/desktop/commit/a7e9b1c0c11fd88bc667012f1697316e2a4693f8))
- name iframes for dev-tools picker (#2723) *(isolated)*([1bc2150](https://github.com/nteract/desktop/commit/1bc215092fc4244804bbc64028344a957fe151c7))
- unexport anyOutputNeedsIsolation for Fast Refresh (#2724) *(outputs)*([351cc85](https://github.com/nteract/desktop/commit/351cc8546d21020e9cc6cc5b81c6d4308e29604c))
- three scroll-scale follow-ups from #2702 (#2725) *(sift)*([fbd6fdc](https://github.com/nteract/desktop/commit/fbd6fdc03893810dd39e55dd62768b066b41aba9))

### Documentation

- add design system guide (#2642)([ebb9437](https://github.com/nteract/desktop/commit/ebb9437e0b0fd70f815cba0e2fb4faf9ed51d12e))
- add pr reviewer skill (#2672) *(agents)*([f8d54f6](https://github.com/nteract/desktop/commit/f8d54f68a236331ab67305a5b52732947ba0d344))

### Features

- inline image rendering from HF parquet metadata (#2621) *(sift)*([4c59bcd](https://github.com/nteract/desktop/commit/4c59bcdb1f3b62532724ce23907b1faf6388df48))
- collapse text rows by default, expand on click (#2623) *(sift)*([9bb8fbb](https://github.com/nteract/desktop/commit/9bb8fbb277a2b1a6e5ff8ccba9a76eb63bc18c8e))
- surface HF rich types end-to-end via launcher + Sift (#2625)([e17300a](https://github.com/nteract/desktop/commit/e17300a447235b67b215728e83c63b436733f0a6))
- preserve table blob metadata (#2629) *(outputs)*([d818490](https://github.com/nteract/desktop/commit/d81849022eabab654a0bbe79e33c0f9f26abf347))
- emit arrow ipc table payloads (#2632) *(outputs)*([801f436](https://github.com/nteract/desktop/commit/801f436267caa2acfe6d3da6861f176e4eb56b32))
- add cream markdown typography (#2639) *(notebook)*([f348e3b](https://github.com/nteract/desktop/commit/f348e3b6cc9bd8f7a2be4582d8441f32bb2343a8))
- prototype cached recall search (#2640) *(history)*([f7b2a36](https://github.com/nteract/desktop/commit/f7b2a3633ab7090456266ef0786279d750f3ca52))
- add output frame typography (#2641) *(notebook)*([0403f94](https://github.com/nteract/desktop/commit/0403f94a23a79eabd4e4a1ff241325dc5a9c93b0))
- simplify output layout behavior (#2660) *(notebook)*([756a23c](https://github.com/nteract/desktop/commit/756a23cf2a2ff040d5a755c33c76f37154d805f2))
- add magnetic sift focus affordance (#2663) *(notebook)*([49f66ad](https://github.com/nteract/desktop/commit/49f66ad1dee9b3df3ba298f1490dad6691c73415))
- add bedrock sdk review harness (#2667) *(pr-reviewer)*([cc9fa29](https://github.com/nteract/desktop/commit/cc9fa291d3820ff710a45c79e1a7f6b915520c12))
- add arrow-native table manifests (#2658) *(outputs)*([740ad98](https://github.com/nteract/desktop/commit/740ad98d264a3687bb3d0895096c9093edd41516))
- persist arrow stream manifest chunks (#2705) *(outputs)*([46160c1](https://github.com/nteract/desktop/commit/46160c153bc301e943d08759f58983bb3466957a))
- precompute arrow manifest llm hints (#2715) *(outputs)*([e283c27](https://github.com/nteract/desktop/commit/e283c2771e5071fe7475d2f5e1db037eeb8609b0))

### Performance

- skip fresh maturin rebuilds (#2661) *(runtimed-py)*([5b4a243](https://github.com/nteract/desktop/commit/5b4a24384e60e4989c8ef6b39121dddd8edfa5ff))
- render streams only when flushing (#2716) *(runtimed)*([67cca26](https://github.com/nteract/desktop/commit/67cca268397568855a559bf2f20841eb2d68b53c))

### 2.4.6 — May 8, 2026
### Bug Fixes

- remove private runtimed dependency from node wrapper (#2559) *(npm)*([c7bdcb6](https://github.com/nteract/desktop/commit/c7bdcb62845da9eac7831f951bb7b2ed626da102))
- open ephemeral notebooks by id (#2561) *(runt)*([e5d48e4](https://github.com/nteract/desktop/commit/e5d48e44eaa64f5b4c3e8e9ea23b3c4ebdb94ab6))
- register llm repr formatter (#2562) *(kernel-launcher)*([ceeff36](https://github.com/nteract/desktop/commit/ceeff36d3110fafd88a85ec56de94f53dae03f73))
- surface environment preparation failures (#2563) *(runtimed)*([6d5d294](https://github.com/nteract/desktop/commit/6d5d29406acd30c5bfbe5fb4096a116c3e904da2))
- make test key path override thread-local (#2581) *(runt-trust)*([3622305](https://github.com/nteract/desktop/commit/362230531622e70b3d2fcccb13f89492c368e5ca))
- render markdown on ctrl-enter (#2582) *(notebook)*([26fbaad](https://github.com/nteract/desktop/commit/26fbaad504a8aa9be181c221168b72f946954d50))
- avoid unnecessary dev wasm setup (#2583) *(xtask)*([7c00d20](https://github.com/nteract/desktop/commit/7c00d20baec27193c41499341015941b3fced042))
- pin automerge patch log recovery (#2584) *(sync)*([979820c](https://github.com/nteract/desktop/commit/979820c50088436e45ddc5612d481fdab19a4d13))
- move presence heartbeat into sync engine (#2586) *(runtimed)*([08d528e](https://github.com/nteract/desktop/commit/08d528eaf0758846a928e92e3aedc49fa65128bc))
- shield static iframes from scroll (#2585) *(notebook)*([4c18f23](https://github.com/nteract/desktop/commit/4c18f232995807998b575029f212992a738d15ff))
- send presence heartbeat immediately (#2587) *(runtimed)*([3b2c076](https://github.com/nteract/desktop/commit/3b2c0766c6e2095f64c5cc5b17d2710fcbd75be9))
- guard project detection and settings sync compatibility (#2591) *(runtimed)*([eb3a10a](https://github.com/nteract/desktop/commit/eb3a10ae83e62247857e888ebdbd7d4e07540ccb))
- require channel approval (#2599) *(trust)*([36e6169](https://github.com/nteract/desktop/commit/36e6169c377a7af6ce0ea3866a5116dda5f5282b))
- contain renderer plugin load failures (#2596) *(outputs)*([6c40706](https://github.com/nteract/desktop/commit/6c40706c91ab8b94661f5f9e1742048bf1a9f666))
- migrate plugin to earendil package scope (#2601) *(pi)*([ed84273](https://github.com/nteract/desktop/commit/ed84273b6d90e448f774177c7389ed8f611c232a))
- publish nteract Codex marketplace (#2602) *(plugins)*([4f44ce3](https://github.com/nteract/desktop/commit/4f44ce32b8ca60739f9610ef96d422c5d56e1e30))
- filter inactive pool retry banners (#2605) *(notebook)*([a777f09](https://github.com/nteract/desktop/commit/a777f095353c164b391328ad31cca3e4ca431d4d))
- avoid promoting pyproject dev deps (#2606) *(runtimed)*([08fe3e4](https://github.com/nteract/desktop/commit/08fe3e4f9ede585606efe41f5c578eaf0c412b0c))

### Documentation

- consolidate agent instructions into nested AGENTS.md (#2565)([21ef30a](https://github.com/nteract/desktop/commit/21ef30a6727dcde1faba98c6468458c3ca1089b6))
- consolidate frontend + UI docs into nested AGENTS.md (#2568) *(frontend)*([ba2f78b](https://github.com/nteract/desktop/commit/ba2f78bbeedc309a83436aa5268ebdffe11d159e))
- correct consolidated agent guidance (#2569)([35fbc2a](https://github.com/nteract/desktop/commit/35fbc2abce849b4baca9848c8b553a68d6eba8ce))
- consolidate env management into crates/kernel-env/AGENTS.md (#2571) *(environments)*([770ed5b](https://github.com/nteract/desktop/commit/770ed5b33f9a0a5468b82e1e9f498a060c31e384))
- align environment guide with resolver code (#2572) *(env)*([e24a89c](https://github.com/nteract/desktop/commit/e24a89caf050e3b16c9609a62503d8aa8a1a8510))
- consolidate architecture + daemon into crates/runtimed/AGENTS.md (#2573) *(runtimed)*([377375b](https://github.com/nteract/desktop/commit/377375bd1b8abaebee838b2cbb29df6c2d4c7696))
- correct runtime architecture guidance (#2574) *(runtimed)*([a2c9fda](https://github.com/nteract/desktop/commit/a2c9fda83cdfec1a48071dfda42e31a42578db8f))
- trim nested agent guidance (#2577) *(codex)*([10cf402](https://github.com/nteract/desktop/commit/10cf402085719f9f402afc8f7ecdaed11e9295e9))
- collapse 15 skills to 7 (#2578) *(skills)*([855acc8](https://github.com/nteract/desktop/commit/855acc815dfd205ca6f9198963bde1a15d7524eb))
- expose repo skills via agents standard (#2580) *(skills)*([b88fd51](https://github.com/nteract/desktop/commit/b88fd5159d59e5ea125aa32b638c6adc3b8f716b))

### Features

- add browser dev relay transport (#2593) *(notebook-host)*([8c6c94a](https://github.com/nteract/desktop/commit/8c6c94a72a3d4cb1935cd58fa47837c128212987))
- add create notebook environment mode (#2592) *(runtimed)*([d86c66c](https://github.com/nteract/desktop/commit/d86c66c4b4461fe6ac574ba0bc4f2d3a3d6dda11))
- expose browser relay health (#2597) *(notebook)*([92df9eb](https://github.com/nteract/desktop/commit/92df9ebe28d7054685556619bd74df47820fe824))
- output mode strip (compact / expanded / focused) (#2600) *(notebook)*([33645d2](https://github.com/nteract/desktop/commit/33645d2db93f9b6de7e9414da258682943545027))

### 2.4.5 — May 5, 2026
### Bug Fixes

- keep idle notebook windows alive and survive daemon disconnect (#2556)([39d6d20](https://github.com/nteract/desktop/commit/39d6d20bd366237eb5ce539d3b79e44abb652814))

### Documentation

- document json authority (#2554) *(settings)*([6351ba3](https://github.com/nteract/desktop/commit/6351ba3a86465787496cc0053d508cb72bade9b8))

### 2.4.4 — May 5, 2026
### Bug Fixes

- mark all in-flight executions on interrupt to prevent orphaned cells (#2495) *(runtime-agent)*([c0350a0](https://github.com/nteract/desktop/commit/c0350a0fbb523a65db4f33e3d9345d2d31119f9a))
- remove coordinator-side sweep to fix create_cell(and_run) race (#2501) *(interrupt)*([2dca4d7](https://github.com/nteract/desktop/commit/2dca4d737f534ab1d61ea5e655234cff2a4afb29))
- satisfy windows cli install clippy (#2510) *(notebook)*([40b9d62](https://github.com/nteract/desktop/commit/40b9d62cafcfc9b982f76222066a5239922304a7))
- make json canonical (#2512) *(settings)*([959680e](https://github.com/nteract/desktop/commit/959680edea8f6696b058002395300704abbebe9b))
- abort kernel launch when conda env sync fails (#2514) *(kernel-env)*([7cfd451](https://github.com/nteract/desktop/commit/7cfd451150fbf28341d75e02d4374d987f151f44))
- seed default pool packages into trusted package store (#2520) *(runtimed)*([fefd14a](https://github.com/nteract/desktop/commit/fefd14a47bfe195476c558b074f5eb7ab47a2cf1))
- spawn node subscriptions on napi runtime (#2523) *(pi)*([d17f6e5](https://github.com/nteract/desktop/commit/d17f6e54d528445075fc67f2ec05c26ffe6d0efb))
- use nteract desktop patch fork (#2530) *(automerge)*([6909ae0](https://github.com/nteract/desktop/commit/6909ae0afa2b5ee53e201f75eb29ff5506fa2c42))
- gate relay frames per bootstrap generation (#2529) *(notebook)*([6b9bc5f](https://github.com/nteract/desktop/commit/6b9bc5fd36b0d9c60f7c053bc13552d60e69605c))
- return typed rebuild errors (#2532) *(automerge-recovery)*([4f4e7e6](https://github.com/nteract/desktop/commit/4f4e7e603aa1c3b2f63b5edf3bcc2f29c5c9fe4e))
- propagate transaction rebuild errors (#2537) *(runtime-doc)*([93038c3](https://github.com/nteract/desktop/commit/93038c3839ad1a1c380e283f4b8bd34d831cf9d8))
- render Arrow null columns as null cells (#2546) *(sift)*([80cc87a](https://github.com/nteract/desktop/commit/80cc87a7ec84de569073f039c7bdfdd89faacc4d))
- recover sync from canonical json (#2547) *(settings)*([fb9f2e6](https://github.com/nteract/desktop/commit/fb9f2e68c89a63112909940b51298e26cebe4e24))
- prevent orphan kernel leak from stale peer connections (#2549) *(daemon)*([ac3b87a](https://github.com/nteract/desktop/commit/ac3b87a21d0ae5033597f84c45e6e610c7278b39))
- warn on dropped IOPub execution signals (#2552) *(runtimed)*([3fbe1d1](https://github.com/nteract/desktop/commit/3fbe1d112e03f2a37242395cc9bf20f6897f70f0))
- persist daemon writes through json (#2553) *(settings)*([012dd55](https://github.com/nteract/desktop/commit/012dd55fdd10ec6ab35c6eab9721e1fb1ea0f067))

### Documentation

- update install instructions to use latest tag (#2498) *(pi)*([68e47ac](https://github.com/nteract/desktop/commit/68e47ac1a2a33e931244d8708f0eab56b372f522))
- reframe comments per rgbkrk review (#2502) *(interrupt)*([9614f1f](https://github.com/nteract/desktop/commit/9614f1ff1e78b77e028844c958d8c06f266b26f7))
- refresh transaction and recovery guidance (#2531) *(automerge)*([1b8bd87](https://github.com/nteract/desktop/commit/1b8bd8750a02b7ab83c35a3e39d997dd4eb2b6c4))
- refresh transaction guidance (#2542) *(automerge)*([b3a15f4](https://github.com/nteract/desktop/commit/b3a15f4cc920d31ea1c0e426e8eec63ce1159b77))

### Features

- add package icon and improve metadata (#2499) *(pi)*([1ff49fe](https://github.com/nteract/desktop/commit/1ff49fe03823d04fb729f7575b1a5409123c2e28))
- simplify narrative and expose runt CLI (#2500) *(pi)*([119339e](https://github.com/nteract/desktop/commit/119339e66e91b8466bb3ba2efe387bb59dab7b9b))
- show uv project preparation phase (#2511) *(runtimed)*([733f247](https://github.com/nteract/desktop/commit/733f2471224db2bf111bcd748dfb9ee1d73c776d))
- install default data packages in pools (#2507) *(env)*([7bb9228](https://github.com/nteract/desktop/commit/7bb9228a213c2d3858059366d49caf52fb64c8b3))
- stream projected execution events (#2508) *(runtimed-node)*([2021a9e](https://github.com/nteract/desktop/commit/2021a9e20ad35608b089a43b64e626b6ee254beb))
- add pi launcher (#2524) *(xtask)*([7a78d2d](https://github.com/nteract/desktop/commit/7a78d2de67afb9aa52cac0a3f064de30d1f9d981))
- add `config show` and `config path` subcommands (#2534) *(runt)*([f042ad3](https://github.com/nteract/desktop/commit/f042ad3780017451f11c66bb1f5ea845aec36f5b))
- DataTable sparklines, width pruning, output alignment (#2536) *(pi)*([4957a9d](https://github.com/nteract/desktop/commit/4957a9dd30b680f7e50ef084fe840031a3685f15))
- spinner in In[*] while waiting for first code token (#2540) *(pi)*([afc56a0](https://github.com/nteract/desktop/commit/afc56a01f9bb839d55483c3755545561f5437b7b))
- add iframe output height toggle (#2545) *(notebook)*([ab570f7](https://github.com/nteract/desktop/commit/ab570f76a6b80f1a1177e6c46b5c6b9715c712d4))
- surface install hint when daemon is missing (#2544) *(pi)*([203ba23](https://github.com/nteract/desktop/commit/203ba23bad25c2d343e642264ed004fc061f6fc8))

### Performance

- isolate pool warming in subprocess (#2516) *(runtimed)*([a9c6cbf](https://github.com/nteract/desktop/commit/a9c6cbf1b3f98133909d5807de1d4ca7c6a5fbef))

### 2.4.2 — May 2, 2026
### Bug Fixes

- eliminate env var race in trust tests (#2479) *(runt-trust)*([c84a5e0](https://github.com/nteract/desktop/commit/c84a5e00c5cf5227b7d4a090c96450f0a2128b8a))
- release daemon singleton lock on drop (#2481) *(runtimed)*([41fa3e6](https://github.com/nteract/desktop/commit/41fa3e6ac9dfb95e511727c1e1a655313a0d9612))
- 4 gremlin-discovered MCP surface fixes (#2483) *(mcp)*([9380cab](https://github.com/nteract/desktop/commit/9380cabe04143519a8f96fc36cc72c9413dfe7ff))
- surface conda env build failures instead of silent not_started (#2487) *(runtimed)*([56ba560](https://github.com/nteract/desktop/commit/56ba560caef41106ad208a9ba15293aff45d9709))
- detect Python version mismatch in conda:env_yml envs, guard user-managed envs (#2478) *(kernel-env)*([5f28eb6](https://github.com/nteract/desktop/commit/5f28eb667663c549a8e5035b60287665c0fb8966))

### Features

- add AppImage release installer (#2485) *(linux)*([86e2ceb](https://github.com/nteract/desktop/commit/86e2ceb5fd0b96275f6f9f373cccd24fa15de0d1))
- expand native notebook control API (#2486) *(runtimed-node)*([15172a3](https://github.com/nteract/desktop/commit/15172a346edcabe22d22091162943e3af1b2f241))

### 2.4.1 — May 2, 2026
### Bug Fixes

- pin Python version in sync_dependencies to prevent version drift (#2470) *(kernel-env)*([c89e2ba](https://github.com/nteract/desktop/commit/c89e2bac892917c2c16b19d14ee1aea70e782fad))
- forward bufferPaths to iframe so binary data renders as DataView (#2474) *(widgets)*([2c04231](https://github.com/nteract/desktop/commit/2c042316cbb4ed5eeed018e6e8d41ab539267ebd))
- coerce ipywidgets Image/Video width+height to CSS pixels (#2476) *(widgets)*([e4990de](https://github.com/nteract/desktop/commit/e4990de978a46156a07551286c0e6d1a769af3fd))

### Features

- surface hot-sync env-progress via RuntimeStateDoc (#2469) *(runtime-agent)*([5c3a705](https://github.com/nteract/desktop/commit/5c3a70587f627a41b19868ea49e7a867e09e41a1))
- park sessions on notebook switch to prevent eviction (#2472) *(runt-mcp)*([d2c938d](https://github.com/nteract/desktop/commit/d2c938d980afc4c761622dba32b0ccfb6fc7e0d5))

### 2.4.0 — May 2, 2026
### Bug Fixes

- anchor viewport during column resize (#2257) *(sift)*([34c279d](https://github.com/nteract/desktop/commit/34c279d077c1e1f0cbae8a10d0eed28fa05de2d4))
- serve dev plugin assets from workspace (#2262) *(runtimed)*([a901ea3](https://github.com/nteract/desktop/commit/a901ea347211c4b5a9668cd31083e11a03f758e4))
- derive worktree env for dev daemon (#2264) *(xtask)*([616e030](https://github.com/nteract/desktop/commit/616e03026cb1ff98634f677e7a2dafaff0fb1f0b))
- ignore cancelled bootstrap handles (#2265) *(notebook)*([3ad4bdb](https://github.com/nteract/desktop/commit/3ad4bdb5b7cefaefd2025c71f79d61878baaa51d))
- guard post-approval actions (#2261) *(trust)*([97830bf](https://github.com/nteract/desktop/commit/97830bfb7b63aef67142e657fdddf685aaf2182d))
- include pixi deps in trust verification (#2268) *(trust)*([f084973](https://github.com/nteract/desktop/commit/f084973460525d329becaa5aeb47d2001e1153d3))
- stop iframe wheel handoff (#2273) *(outputs)*([25d8ef1](https://github.com/nteract/desktop/commit/25d8ef153a6f097bad27122c2c0b6a52d2574cea))
- reserve kernel ZMQ ports outside Windows ephemeral range (#2276) *(runtimed)*([8a4493f](https://github.com/nteract/desktop/commit/8a4493f1bc14d25542591a2e88cf772828bf473c))
- keep frame pump hot during parallel sync (#2279) *(notebook-sync)*([8649cc4](https://github.com/nteract/desktop/commit/8649cc47bee5696ac936a6b22098a9d7802af679))
- retry kernel launch on EADDRINUSE port race (#2278) *(runtimed)*([805478f](https://github.com/nteract/desktop/commit/805478fa52b61a210a8f6ac1b072d444b3645607))
- drop reserved listeners before kernel spawn on Windows (#2283) *(runtimed)*([155a579](https://github.com/nteract/desktop/commit/155a57924717954be569926e7365213391eb4a01))
- decouple peer socket writes (#2288) *(runtimed)*([27bba44](https://github.com/nteract/desktop/commit/27bba44918cae45077eedae4c5611b4b2c3e4a3b))
- add clang to cloud-setup.sh for sift-wasm cross-compilation (#2293) *(cloud)*([792e158](https://github.com/nteract/desktop/commit/792e1582bc63b3de708d0428ba0129097af8ceb2))
- move peer requests off reactor (#2292) *(runtimed)*([2691e4f](https://github.com/nteract/desktop/commit/2691e4f098cde52838a99ed93e9411e866f65f03))
- remove daemon metadata request path (#2296) *(protocol)*([65a2f78](https://github.com/nteract/desktop/commit/65a2f78a02dc2991e4ddd6f24b5970d84aeee92a))
- enforce trust for launch and env sync (#2297) *(runtimed)*([515fb57](https://github.com/nteract/desktop/commit/515fb57875eb47ad48964a1e2c7f4138fe82b8dd))
- build WASM once on Linux, share across all jobs (#2298) *(ci)*([ebf015a](https://github.com/nteract/desktop/commit/ebf015a188a80c50a5d92817d255562fabd1836a))
- pin llvm@18 for macOS WASM clang fallback (#2299) *(ci)*([8f7cbf1](https://github.com/nteract/desktop/commit/8f7cbf172c734d951c9cf06f10f0b47b72d3d42e))
- use Tauri API to close the upgrade window (#2305) *(upgrade)*([89a7b4f](https://github.com/nteract/desktop/commit/89a7b4fbbcabcb70d20d54d5638e09fc8229f9ae))
- bootstrap nightly installs on Windows (#2306) *(installer)*([bc1eb60](https://github.com/nteract/desktop/commit/bc1eb604888241d00df1bb8596aa22a817a27433))
- add Win32_Security to windows-sys features (#2307) *(installer)*([173ee83](https://github.com/nteract/desktop/commit/173ee837a0dc7954996572c1c2d635da79e12213))
- show stale approval errors inline (#2309) *(trust)*([7351ac8](https://github.com/nteract/desktop/commit/7351ac840e0810faba7086ab9b30c880bee249ac))
- approve headless dependency changes (#2314) *(trust)*([0e11748](https://github.com/nteract/desktop/commit/0e11748b94414c5b6e3bf5382e9218b269992bf1))
- detach Windows daemon spawn so the NSIS installer can return (#2308) *(installer)*([aa838d9](https://github.com/nteract/desktop/commit/aa838d98cbdde636f91d02a5016d14145fb7f96c))
- suppress ty type-checker errors for duck-typed test stubs (#2318) *(runtimed)*([c327a3e](https://github.com/nteract/desktop/commit/c327a3e4228939f77aed715519be2236775ef9f0))
- graceful session disconnect on SIGTERM (#2319) *(runt-mcp)*([5104865](https://github.com/nteract/desktop/commit/5104865721db52bed3ce6f1b4f2a047e084793e0))
- report package_manager as "deno" for Deno notebooks (#2320) *(runt-mcp)*([0e5e31e](https://github.com/nteract/desktop/commit/0e5e31ee0ed538dc250eafb6a9f4ff21a5db5298))
- unblock Windows CI by skipping daemon start in NSIS hook (#2323) *(installer)*([e484a88](https://github.com/nteract/desktop/commit/e484a88030b5afd3369a76399b90f185ca9a45b6))
- align conda integration trust expectations (#2326) *(runtimed-py)*([931e3dd](https://github.com/nteract/desktop/commit/931e3dd7ef194b11c4cbc7c2e8d6ced394c86b6e))
- keep project deps out of notebook metadata (#2334) *(runtimed)*([65b0b9d](https://github.com/nteract/desktop/commit/65b0b9dc48c1a0423017d0a9c3c2f09e3685a168))
- reap managed child processes (#2336) *(mcp)*([02a0caf](https://github.com/nteract/desktop/commit/02a0caf9d8be0a0accdba2f48ad64dd8b2c72d4d))
- persist runtime agent ownership manifests (#2343) *(runtimed)*([68b4438](https://github.com/nteract/desktop/commit/68b44388d305335934bd4b8e8a0d752045bfcbae))
- adapt session env source types (#2353) *(runtimed-py)*([3821263](https://github.com/nteract/desktop/commit/3821263b2e5f6927c9efb79d6034898035ee8fdc))
- use LaunchSpec::Auto for save-as kernel relaunch (#2357) *(notebook)*([d73a455](https://github.com/nteract/desktop/commit/d73a45556bc3c7c10dd247f1d87d4f41cd02b1bc))
- resolve execution counts by sequence (#2364) *(runtime)*([5fc5626](https://github.com/nteract/desktop/commit/5fc56262cc934055e2ed14849cc437886074222d))
- sanitize AppImage daemon bootstrap (#2363) *(linux)*([a240f32](https://github.com/nteract/desktop/commit/a240f3206517cf6e255a4d820498cbcfa2542ce9))
- clean wasm build warnings (#2370) *(build)*([d7314bd](https://github.com/nteract/desktop/commit/d7314bda9b05f42e9bac28ffcc4d97722044882a))
- bound sync flush before deno execution (#2374) *(e2e)*([231274b](https://github.com/nteract/desktop/commit/231274b131007afb10f238576c0b03681b05956e))
- autosave runtime outputs explicitly (#2375) *(runtimed)*([220a1d7](https://github.com/nteract/desktop/commit/220a1d79ff203431447af326d8a45dd0ca5d0656))
- handle sync delivery timeouts (#2376) *(e2e)*([e55acc4](https://github.com/nteract/desktop/commit/e55acc4073417f5833cd5be998fa8ce4a85908d5))
- flush autosave on room eviction (#2379) *(runtimed)*([8c16d58](https://github.com/nteract/desktop/commit/8c16d583a97dda6d4bfc689e68363b83452bacd9))
- clean partial streaming load state (#2384) *(runtimed)*([31696eb](https://github.com/nteract/desktop/commit/31696eb574c0f5ce18b0dbdd98ba2723ce41b609))
- reserve kernel ports in daemon (#2391) *(runtimed)*([40370fb](https://github.com/nteract/desktop/commit/40370fb6e3d0fdf968f3c0ad0d7275c4f7a74813))
- persist reconciled settings json (#2396) *(runtimed)*([560574b](https://github.com/nteract/desktop/commit/560574b065b65a9ad388a7b0c9714124750543cf))
- document user-local daemon security model (#2404) *(linux)*([0450b16](https://github.com/nteract/desktop/commit/0450b16371f4a07679db40eaf022c349feb2703f))
- lease pool envs during launch (#2403) *(runtimed)*([c677f8c](https://github.com/nteract/desktop/commit/c677f8c49c2b60892e9c1663e5b6e35a8407fb99))
- auto-wire brew LLVM clang for wasm builds (#2421) *(xtask)*([c5dac1f](https://github.com/nteract/desktop/commit/c5dac1f308093d1474cf4d00337a72bf3a908c56))
- capture env_source before kernel shutdown in restart_kernel (#2420) *(runt-mcp)*([171fd15](https://github.com/nteract/desktop/commit/171fd1550c9090a776f998213fee3e43e0b1521d))
- resolve bundled nightly AppImage runt sidecar (#2422)([20a81f6](https://github.com/nteract/desktop/commit/20a81f6098a0669071b94a66f3842ffac08da508))
- stabilize runtimed eviction test setup (#2423) *(ci)*([0ea72f6](https://github.com/nteract/desktop/commit/0ea72f638dc7b10223b0da22bd61c624f586d10b))
- tolerate mcp EOF in Fedora AppImage smoke (#2426) *(ci)*([72e8482](https://github.com/nteract/desktop/commit/72e8482ff7dc3aff5a01445bc5d9b64813c170ae))
- detect signtool and Azure CLI paths for Windows signing (#2431) *(ci)*([8f8c6be](https://github.com/nteract/desktop/commit/8f8c6be6c2feced3f84884205ae339d1354e4907))
- add signing smoke test and verbose tauri build for diagnostics (#2432) *(ci)*([3f9ca2c](https://github.com/nteract/desktop/commit/3f9ca2c776c69aa3eed857af7585369361438a55))
- harden concurrency diagnostics (#2430) *(mcp)*([4930562](https://github.com/nteract/desktop/commit/49305620923cd257471d6ed2aa5088339bc83de0))
- refresh trust fingerprint after stale approval (#2435) *(notebook)*([2ea4861](https://github.com/nteract/desktop/commit/2ea4861698160bd5efa8b47d08df4d07a51027d9))
- allow iframe output scroll chaining (#2436) *(notebook)*([9e453d5](https://github.com/nteract/desktop/commit/9e453d57e953b6acd655573646bf904a0757185a))
- stabilize embedded git metadata (#2434) *(build)*([6c388e2](https://github.com/nteract/desktop/commit/6c388e2e37fe25e6e24a5b0801dfb725c1653688))
- polish nightly startup (#2437) *(windows)*([0fd6b42](https://github.com/nteract/desktop/commit/0fd6b4256e9e2f9620b3c435023c8bb888bc5c54))
- derive dependency guards from observed heads (#2439) *(trust)*([ff0c5bd](https://github.com/nteract/desktop/commit/ff0c5bdc30811f21784cd10dec6e0b2316919d50))
- stabilize setup flow (#2440) *(onboarding)*([bc7df34](https://github.com/nteract/desktop/commit/bc7df34792fdc632bfbc8e59a0d1063f6c2b32bc))
- quiet pool status logging (#2446) *(runtimed)*([5c3ee91](https://github.com/nteract/desktop/commit/5c3ee910eace52f66e4a0689948dfa537e82731a))
- install parquet encoder for bootstrap envs (#2445) *(dx)*([5803bb4](https://github.com/nteract/desktop/commit/5803bb4e4785aab016da8793edf68b1d3292566e))
- lower default pool sizes (#2449) *(runtimed)*([5dc8183](https://github.com/nteract/desktop/commit/5dc81837e2a20a8323c2e0c8eaf58c8c44157732))
- propagate schema seed errors (#2450) *(runtime-doc)*([40e2bdd](https://github.com/nteract/desktop/commit/40e2bdd7b5f31a33001bb6b71beaaa444b606203))
- prefer cached conda repodata for pool warming (#2453) *(runtimed)*([f0fd71b](https://github.com/nteract/desktop/commit/f0fd71b1abd4b9957e8a0b02bbc315bcd0b539a2))
- preserve stale pool envs until replacement (#2452) *(runtimed)*([86787e9](https://github.com/nteract/desktop/commit/86787e91ee07b09965878480b9f47d54bd840a67))
- add rich runtime launch diagnostics (#2455) *(runtime)*([f6074c4](https://github.com/nteract/desktop/commit/f6074c42e3b5952047a4b2309f984ff44107d616))
- clear session immediately on daemon disconnect (#2448) *(mcp)*([b706e8a](https://github.com/nteract/desktop/commit/b706e8a1bd293413788af68923bf6f8d25aea289))
- try cached uv installs before network (#2456) *(runtimed)*([5cb916b](https://github.com/nteract/desktop/commit/5cb916bd2257934c633dc3e14ebb86b7741641c3))
- pulse isolated renderer layout after output changes (#2461) *(notebook)*([ef05c5e](https://github.com/nteract/desktop/commit/ef05c5ed21232aacad37029a5de4c388d9618ceb))
- finish env-progress CRDT migration, close stuck banner (#2465) *(protocol)*([299a455](https://github.com/nteract/desktop/commit/299a455428e3419039beb9d4265faef0d50822b4))

### Documentation

- trim AGENTS.md to a repo map (#2354) *(agents)*([9e300d5](https://github.com/nteract/desktop/commit/9e300d522660cdac62d4cba5ad28c61f166aba9d))
- document apt.runtimed.com installs (#2371) *(linux)*([9dbf4ba](https://github.com/nteract/desktop/commit/9dbf4ba3ffe87b08279e0eca524a4d176d2d03f8))
- clarify legacy execution count boundary *(notebook-doc)*([1cc0d08](https://github.com/nteract/desktop/commit/1cc0d0810bb56092c72b7c15bd976662d2053c14))
- refresh runtime architecture guidance (#2411)([9c489c0](https://github.com/nteract/desktop/commit/9c489c04fd2936fd73b458b846933f07b9bd303a))
- refresh runtime protocol docs (#2417) *(protocol)*([78da38a](https://github.com/nteract/desktop/commit/78da38a5b32c9af975990cabaa4294dc6a1ddc26))
- design PutBlob frame (#2419) *(protocol)*([ce41a10](https://github.com/nteract/desktop/commit/ce41a10b480bb136343a13569cb97cb8e8a30413))
- refresh protocol architecture docs (#2424) *(protocol)*([e2493f8](https://github.com/nteract/desktop/commit/e2493f8819c5c9d19081199d4a568ea99717571a))
- add automerge protocol guidance (#2438) *(skills)*([76e906c](https://github.com/nteract/desktop/commit/76e906c22d4afaf895b34b0cfbb45ed52ea07ce2))
- add automerge-sync and mcp-session-lifecycle Claude skills (#2460) *(skills)*([f282b9b](https://github.com/nteract/desktop/commit/f282b9b195dd36ec46018ef2d45a1b2a83036baf))
- polish package publishing metadata (#2466) *(npm)*([b6c52d1](https://github.com/nteract/desktop/commit/b6c52d1969117459a0e31fdfde144bb65ad1cf96))

### Features

- gate kernel actions on first RuntimeStateSync (#2256) *(notebook)*([01bca34](https://github.com/nteract/desktop/commit/01bca34ec608ec8efa24802248ff89832b52407b))
- add attach and isolated dev modes (#2260) *(mcp-supervisor)*([37c4c1d](https://github.com/nteract/desktop/commit/37c4c1d9509a8f5c77f5bdb4b6b70797d6034eda))
- persist terminal execution results (#2267) *(runt-mcp)*([7c5b5bb](https://github.com/nteract/desktop/commit/7c5b5bbb41addd101b8b0adc39c5e8decc838fec))
- add manage dependencies tool (#2316) *(mcp)*([2fa69a3](https://github.com/nteract/desktop/commit/2fa69a3fa897ad3d548583b142e8a14340c8f55a))
- add environment build decision state (#2322) *(runtime)*([1a26b33](https://github.com/nteract/desktop/commit/1a26b33de8bb7b2490c4a866e9fe70824abfa13e))
- add trusted package allowlist (#2324) *(trust)*([39da360](https://github.com/nteract/desktop/commit/39da360cb1cfd8eedaabb072dffdeba090f0661c))
- expose durable execution results (#2327) *(runtimed-py)*([b846e84](https://github.com/nteract/desktop/commit/b846e84c51bca790b15ba5dc0491d842b2f80cd2))
- add execution result handles (#2331) *(runtimed-node)*([04b6efa](https://github.com/nteract/desktop/commit/04b6efa3da9bcdf940fd5abaf7dcd17a73b0dbe3))
- add nteract pi package (#2332) *(pi)*([1cb9225](https://github.com/nteract/desktop/commit/1cb9225a11afb54c789c4dfcea3d92c8757ee057))
- switch kernel launch from TCP to IPC on Unix (#2398) *(runtimed)*([319ff16](https://github.com/nteract/desktop/commit/319ff160e359dffa3212d68ceed61c8931f91aa0))
- promote attachments to crdt schema (#2414) *(notebook-doc)*([292b760](https://github.com/nteract/desktop/commit/292b760105f756592a0810d47dca5e313710cd8e))
- add Windows code signing via Azure Trusted Signing (#2428) *(ci)*([3b64d86](https://github.com/nteract/desktop/commit/3b64d86d767f2fcf728b7b93cdbe9627d237da37))
- seed canonical root schema (#2441) *(notebook-doc)*([2026af5](https://github.com/nteract/desktop/commit/2026af5366e909854658ab5c388f3c8271e8822c))
- seed state schema and surface queued executions (#2447) *(runtime-doc)*([4194107](https://github.com/nteract/desktop/commit/419410711660afe70dfdb073d9f3a312c23f0371))
- gate requests on required notebook heads (#2457) *(protocol)*([fdba624](https://github.com/nteract/desktop/commit/fdba6242b0a0f5caeeed38a385bc127d2de15323))
- expose tokio runtime metrics via daemon status (#2463) *(runtimed)*([ea4a57a](https://github.com/nteract/desktop/commit/ea4a57a56ba977fe8dbc8baf7db6f2499260e5ec))

### Performance

- batch viewport cell reads (#2254) *(sift)*([63aa454](https://github.com/nteract/desktop/commit/63aa4543602ab80eca8dc8fc6c7ed05c8e33aff9))
- drop unused production bundle from cargo xtask dev (#2287) *(xtask)*([fc6992b](https://github.com/nteract/desktop/commit/fc6992b579ee1bca51ed3aa89637dd056ce66c4c))
- skip volatile wasm rebuild when notebook --attach (#2467) *(xtask)*([44b73aa](https://github.com/nteract/desktop/commit/44b73aa9168f119dbd6c024b123ffa9b8dfcccff))

## Frequency / raw counts
- total bullets across the series: 56 features, 168 fixes, 6 performance, 28 documentation

---

# ENTRY 2.3  (grouped)
- coversVersions: 2.3.0, 2.3.1, 2.3.4
- note: covers 2.3.0/.1/.4; 2.3.2 and 2.3.3 skipped
- date (latest stable in series, ISO): 2026-04-26T15:35:50Z
- dateLabel (human range): April 24–26, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.3.4-stable.202604261517
- perVersionReleaseUrls:
    - 2.3.4 -> https://github.com/nteract/nteract/releases/tag/v2.3.4-stable.202604261517
    - 2.3.1 -> https://github.com/nteract/nteract/releases/tag/v2.3.1-stable.202604250101
    - 2.3.0 -> https://github.com/nteract/nteract/releases/tag/v2.3.0-stable.202604242255

## Technical changelog (faithful)
### 2.3.4 — April 26, 2026
### Bug Fixes

- cancel-safe FramedReader actor for typed frames (#2182) *(protocol)*([86d6882](https://github.com/nteract/desktop/commit/86d68823285ca85b13c0adfe1f493b6bdc4ac648))
- bump Request cap to 16 MiB for SendComm widget buffers (#2193) *(protocol)*([5965d3a](https://github.com/nteract/desktop/commit/5965d3a18a59f1b3fd65785599de16ddb42b7ae3))
- copy resolved_assets on ephemeral clone (#2195) *(runtimed)*([0e25c4c](https://github.com/nteract/desktop/commit/0e25c4cc0e7fad6e5e7d463c73c0df9679c46dda))
- project-file Tauri commands fall back to working_dir (#2196) *(notebook)*([511fca2](https://github.com/nteract/desktop/commit/511fca2fb39fd4836c7261e2fc12fa58f88f19c5))
- validate MCP tool inputs to prevent silent bad state (#2205) *(runt-mcp)*([6b9fc21](https://github.com/nteract/desktop/commit/6b9fc218e0e5297046d75506ab573840bcb7ed37))
- move lld rustflag out of .cargo/config.toml (#2213) *(ci)*([0cc8fc5](https://github.com/nteract/desktop/commit/0cc8fc54efa4c6988c9ccedc21048ed06c148860))
- surface fast auto-launch errors in create_notebook response (#2214) *(runt-mcp)*([5867bf0](https://github.com/nteract/desktop/commit/5867bf039b32ae3f5fc96f3e98ad537c90236933))
- reject execute_cell on non-code cells (#2224) *(runt-mcp)*([e37aec5](https://github.com/nteract/desktop/commit/e37aec51ee570cf33797bcec6972e87a5091f4f2))
- codex P2 follow-ups — malformed pyproject + watcher arm race + ty (#2229) *(runtimed)*([040b5ec](https://github.com/nteract/desktop/commit/040b5ecc839dd1685979961a66be3cfd8e5ac6c2))
- reposition lazy measured rows before paint (#2237) *(sift)*([1327e45](https://github.com/nteract/desktop/commit/1327e4538b37ac0b6a7d2abda55fde4f3b459d22))
- prevent Safari brush text selection (#2239) *(sift)*([5083dbc](https://github.com/nteract/desktop/commit/5083dbc55b71e26fa8184756ed5cfae13ff33d22))
- resolve wasm package for tsc (#2241) *(sift)*([e070001](https://github.com/nteract/desktop/commit/e070001be3d070d44b7533176bf4badd1bf4c203))
- join multi-line text MIMEs on ingest (#2245) *(runtimed)*([70edd6b](https://github.com/nteract/desktop/commit/70edd6b5fef9130af58f9f3bcb24d529edb170e9))
- route JSON-MIME through serialize, not normalize_text (#2246) *(runtimed)*([13db20d](https://github.com/nteract/desktop/commit/13db20de64fc9565ec345a2bb245f747397a7b60))
- avoid restoring focus after iframe outputs (#2248) *(notebook)*([1357ece](https://github.com/nteract/desktop/commit/1357ece7be260d802319ef751fc36d2711a1e5d5))
- prevent markdown focus scroll (#2249) *(notebook)*([cb2370a](https://github.com/nteract/desktop/commit/cb2370afdc564abc7c082ef18a16ab5c833133ba))
- stabilize popover styles in MCP apps (#2251) *(sift)*([02755be](https://github.com/nteract/desktop/commit/02755bee0665eb5a26b1ae1487e6f3e1916f7eb3))
- hand off iframe scroll boundaries (#2252) *(notebook)*([59d0135](https://github.com/nteract/desktop/commit/59d013581c7e70db83b20e5dd361e637153706bf))
- channel-aware cache directories (#2253) *(kernel-env)*([88c1bad](https://github.com/nteract/desktop/commit/88c1bad17e2f2f3e35a0d43862d50c1a26b1aca3))

### Documentation

- add branch and worktree hygiene guide for agents (#2202)([c89c222](https://github.com/nteract/desktop/commit/c89c22201b5b51fd5244b64b29d9d62792145f64))

### Features

- move path to RuntimeStateDoc, drop NotebookAutosaved + PathChanged + frontend dirty (#2190) *(runtimed)*([cf2c4f3](https://github.com/nteract/desktop/commit/cf2c4f303550a7570b8da17e0fb75875758c1946))
- per-type frame caps with warn-then-error logging (#2191) *(protocol)*([9b2dea6](https://github.com/nteract/desktop/commit/9b2dea6542abcd727fec029e69a84882387b3d63))
- ephemeral clone replaces Save As Copy (#2192) *(notebook)*([6142bb2](https://github.com/nteract/desktop/commit/6142bb2ab2ce77f4bf16d95d904c49ce3e614949))
- scaffold ProjectContext on RuntimeStateDoc (#2209) *(runtime-doc)*([56d0b37](https://github.com/nteract/desktop/commit/56d0b37802b5679c83a6329bbc9377995f3338a9))
- enrich session drop errors with cause and notebook_id (#2212) *(runt-mcp)*([3f300d3](https://github.com/nteract/desktop/commit/3f300d3ec915e9ba671c2784129f29a84b96b521))
- write ProjectContext on notebook open (#2216) *(runtimed)*([7ce8667](https://github.com/nteract/desktop/commit/7ce8667fd9f636ff9af5863c0edb047c07c69036))
- refresh ProjectContext on untitled promotion and save-as (#2218) *(runtimed)*([8924206](https://github.com/nteract/desktop/commit/8924206c90b608b885699cd66fc2e3fbde5b5542))
- surface execution_id through MCP tools (#2219) *(runt-mcp)*([aa7c293](https://github.com/nteract/desktop/commit/aa7c29384842855589887a16ddc8d051e14c0ad8))
- cut project-file detection (pyproject, pixi, environment.yml) over to daemon-sync CRDT (#2220)([d2c5d96](https://github.com/nteract/desktop/commit/d2c5d96cf8a2d59859a05e9a7954143efd580c73))
- surface kernel-launch failures through RuntimeStateDoc (#2234) *(runtimed)*([4df4118](https://github.com/nteract/desktop/commit/4df4118583665a37e5153d45fc1804c528455b41))
- add timeline splat tool (#2235) *(safari-timeline)*([f7c7213](https://github.com/nteract/desktop/commit/f7c7213189d6ed64d89e0261f2318dcdc0809773))
- banner for untyped kernel-launch failures (#2236) *(app)*([0d12f45](https://github.com/nteract/desktop/commit/0d12f45b3e943433aaf1dad5a41df0c8e695f63e))

### Performance

- slim compile graph, track daemon version via child handshake (#2201) *(mcp-supervisor)*([8f0b002](https://github.com/nteract/desktop/commit/8f0b0023ea1fefb916e2083ccb669bcd0ed0f68d))
- drop staticlib/cdylib crate-types from the desktop app (#2203) *(notebook)*([898c606](https://github.com/nteract/desktop/commit/898c6061ec0a2b880de126a3255138f095153a0d))
- link macOS arm64 through lld (#2207) *(build)*([194504b](https://github.com/nteract/desktop/commit/194504bb0c553fd7c25b6cf44670bb19bb583f58))
- supervisor stops rebuilding behind the user's back (#2210) *(dx)*([26c3e21](https://github.com/nteract/desktop/commit/26c3e21f1f81b4ce2f75f5a7329209a2b93184d0))
- sccache for every cargo invocation + fix cargo runt alias (#2211) *(dx)*([e683d1e](https://github.com/nteract/desktop/commit/e683d1e8a9c895fe24d7542bd6545f24984c745a))
- drop sccache auto-wiring for local dev (#2215) *(dx)*([959c3a4](https://github.com/nteract/desktop/commit/959c3a40a94b3f5e57d305346df67fbb168e9395))
- drop dev-mcp + maturin from cargo xtask build (#2226) *(xtask)*([3b43fb9](https://github.com/nteract/desktop/commit/3b43fb979612e82dbf5213e4edca16bef1239fe7))

### Spec

- notebook metadata extras round-trip (#2198)([f6812fe](https://github.com/nteract/desktop/commit/f6812fe5cae9ff060a0b641b22175fb2406c41a7))

### 2.3.1 — April 25, 2026
### Bug Fixes

- mint UUIDs for ID-less cells so save/watch round-trips are stable (#2179) *(runtimed)*([fc8e1d0](https://github.com/nteract/desktop/commit/fc8e1d0a18c1dd7a7b2bf04f34892a417273b069))

### 2.3.0 — April 24, 2026
### Bug Fixes

- set explicit cwd on all UV subprocess commands (#1830) *(kernel-env)*([04c0409](https://github.com/nteract/desktop/commit/04c0409a2e938f1041de5bf5823422443e4a8ee9))
- stream preview tail keeps final lines and stays disjoint from head (#1832) *(runtimed)*([143de40](https://github.com/nteract/desktop/commit/143de406ede0c48f7d338ea17e5d55939600e5f6))
- prevent empty tool cache from poisoning disk (#1834) *(mcpb-runt)*([c6e0a44](https://github.com/nteract/desktop/commit/c6e0a446967625da61ec013f6a2c0914c1cc2ebc))
- evict re-keyed rooms by Arc pointer, not stale key (#1836) *(runtimed)*([8badf16](https://github.com/nteract/desktop/commit/8badf16a326e82642d7e640306543cff8d6d9d2e))
- defensive cell-count guard in rebuild_from_save (#1835) *(notebook-sync)*([63cd3ab](https://github.com/nteract/desktop/commit/63cd3ab4f0b1248627b583d91cc4ba3c709346fd))
- skip file watcher cell deletion when save snapshot is empty (#1837) *(runtimed)*([8b0368e](https://github.com/nteract/desktop/commit/8b0368e724444f20305cc8ef311610fb8ab7dc63))
- sync mcpb_install.rs tool descriptions and handle escaped quotes in check (#1842) *(build)*([da13681](https://github.com/nteract/desktop/commit/da13681789a37c9ac519203982ac483f53be24f7))
- handle nested list values in table cells (#1843) *(sift)*([40d2f89](https://github.com/nteract/desktop/commit/40d2f895d7ecd444f357316952d81d1819d3b30b))
- send RuntimeStateDoc sync replies on initial connection (#1844) *(notebook-sync)*([7c58446](https://github.com/nteract/desktop/commit/7c584463d33dc4effb167c1494488731d3b72e10))
- update integration tests for UUID-first identity and inline sync (#1845) *(test)*([7b89459](https://github.com/nteract/desktop/commit/7b894595d9378a47bde5ec62facc030ee6697670))
- declare type=object on reconnect tool inputSchema (#1848) *(runt-mcp-proxy)*([601fb91](https://github.com/nteract/desktop/commit/601fb911f21e47eebc313779240639480582a53c))
- fix column pin/unpin reordering tearing UI (#1850) *(sift)*([8437d5b](https://github.com/nteract/desktop/commit/8437d5bd0462445c042e86077d2a724d4279b64c))
- handle all Timestamp time units + Date32/Date64 in filtered histogram (#1852) *(sift)*([029d8ab](https://github.com/nteract/desktop/commit/029d8ab37158bbbf0ae78a51fe641e5c4b969af4))
- filtered histogram edge cases + Utf8View decode (#1859) *(sift)*([475e327](https://github.com/nteract/desktop/commit/475e327206e2bca941afd6f8c00588a18293ff1b))
- category popover UX pass (#1861) *(sift)*([dd5c77b](https://github.com/nteract/desktop/commit/dd5c77b777aa15796b0e8e4e4b7031cfea38f593))
- inline text-MIME comm state blobs (#1863) *(widgets)*([2eef6e3](https://github.com/nteract/desktop/commit/2eef6e39a660e4b07251ab28337838cc4f573aec))
- restore _esm/_css as URL passthrough in comm-state resolver (#1866) *(widgets)*([e3384d7](https://github.com/nteract/desktop/commit/e3384d709a5054bfd43ddf1685faf15c4984208c))
- await <link rel=stylesheet> load before rendering anywidget (#1868) *(widgets)*([912795a](https://github.com/nteract/desktop/commit/912795ab85757f4b090938688411b7ddc04cb0c2))
- skip redundant dep bootstrap in auto_launch_kernel (#1873) *(runtimed)*([28e7722](https://github.com/nteract/desktop/commit/28e7722d693b5de52479570838d8feb305edcabb))
- render zero-width range filter as point marker (#1874) *(sift)*([fd90eea](https://github.com/nteract/desktop/commit/fd90eea13ae3f38a3e81dbc0243afdfe4088d58f))
- use cocoa::base::YES for macOS x86_64 BOOL compatibility (#1875) *(build)*([72a1476](https://github.com/nteract/desktop/commit/72a14766f4481da1a2b5c76c170070eb591907b1))
- reset execution_count on Clear Outputs (#1877) *(runtimed)*([6946849](https://github.com/nteract/desktop/commit/69468491d305710241c03a6afb9abfe1c6106306))
- stop double-painting on lazy-prepared rows during scroll (#1879) *(sift)*([e276b3b](https://github.com/nteract/desktop/commit/e276b3bc497eabf328b0b88daa3739d2ff800ef2))
- catch exceptions in Tauri frame listener so it doesn't silently die (#1883) *(notebook)*([f2131c3](https://github.com/nteract/desktop/commit/f2131c3e8e6b4f6a3a6004c877034848fb167a8d))
- sync daemon:ready cache on save-as too (#1893) *(notebook)*([e7b0dd6](https://github.com/nteract/desktop/commit/e7b0dd69ef3daaec2eedf567eda8262a2c5b2eb2))
- respect default_python_env in LaunchKernel auto fallback (#1898) *(runtimed)*([0af3b21](https://github.com/nteract/desktop/commit/0af3b2192184cad04f3b8801b9ceaf2c9c76c926))
- attribute widget writes to break the echo loop (#1900) *(widgets)*([eab5e0d](https://github.com/nteract/desktop/commit/eab5e0da30b747de62b426545c2388b4aed3b9dc))
- keep a trail of optimistic values, not just the latest (#1902) *(widgets)*([59595f6](https://github.com/nteract/desktop/commit/59595f6ad6397d303cc2b73503de84867461b2d7))
- re-surface comm updates dropped while resolver wasn't ready (#1903) *(sync-engine)*([3aab5cf](https://github.com/nteract/desktop/commit/3aab5cf3b3331c2923e98b58d19ce5911713869b))
- IOPub outputs silently dropped by shared-actor fork merges (#1905) *(runtimed)*([05d250a](https://github.com/nteract/desktop/commit/05d250ab7eb21837da1091c7819bad336e5ec126))
- poll for eviction persistence instead of sleeping (#1907) *(test)*([dedd29e](https://github.com/nteract/desktop/commit/dedd29ed3224af361c7d9ba75e9a806f112306af))
- use per-task stable actors for IOPub/shell/coalesce (#1913) *(runtimed)*([279bac4](https://github.com/nteract/desktop/commit/279bac4520a98dc1cd71346ec2bd72fcf7ab61a7))
- eliminate shared-actor fork merges in notebook_sync_server (#1911) *(runtimed)*([9525119](https://github.com/nteract/desktop/commit/95251191f5c305df451fe5baaa5f8b8f850d2f3a))
- propagate errors instead of panicking (#1925) *(notebook-doc)*([248adc6](https://github.com/nteract/desktop/commit/248adc6dca7c2ee5127f0529dc2af1fb5224274e))
- propagate schema and cwd errors instead of panicking (#1924) *(mcp-supervisor)*([181a64b](https://github.com/nteract/desktop/commit/181a64b43c7a7778e2b9769c255bda9bf12ead55))
- flush persist debouncer before room eviction removes it (#1929) *(runtimed)*([96ceef3](https://github.com/nteract/desktop/commit/96ceef30c30951535c2aedd1c01be67bc664a330))
- spawn panic handling — WarmingGuard + task supervisor + migration (#1930) *(runtimed)*([2fb2291](https://github.com/nteract/desktop/commit/2fb2291ef64575cacff9d2acc2a12b097b2c44e6))
- increase RestartKernel/LaunchKernel/SyncEnvironment timeout to 240s (#1941) *(runtimed)*([6ad923a](https://github.com/nteract/desktop/commit/6ad923aa9e618f35374784da6ee8e2830d8a462a))
- clarify save_notebook path requirement for ephemeral notebooks (#1944) *(runt-mcp)*([1bcacec](https://github.com/nteract/desktop/commit/1bcacec0fc545a1458749d4bd5163698f453c2af))
- periodic RuntimeStateDoc compaction prevents frame overflow (#1942) *(runtimed)*([1d0d1a3](https://github.com/nteract/desktop/commit/1d0d1a33b490972d0c1f9cb69af5935af761778d))
- drain prewarmed pool when default packages change (#1945) *(runtimed)*([5a4a689](https://github.com/nteract/desktop/commit/5a4a68968b0e404b15537e0bfd16e802991962ed))
- use in-place CRDT updates for stream coalescence (#1947) *(notebook-doc)*([93b802f](https://github.com/nteract/desktop/commit/93b802ff82bf186b9ea0a1672f80075b39a99623))
- eliminate TOCTOU gap in RuntimeStateDoc initial sync (#1946) *(notebook-doc)*([21175ad](https://github.com/nteract/desktop/commit/21175ad8b987aa6a70831cd1e531e32b2e197190))
- correct coalescence test assertions and add stale-key coverage (#1948) *(notebook-doc)*([1620d8c](https://github.com/nteract/desktop/commit/1620d8c895b620ea9250caf610418273a6195ae9))
- use connect_open for file-backed notebook rejoin (#1953) *(runt-mcp)*([18d16c5](https://github.com/nteract/desktop/commit/18d16c577cc9d2b446feced2b83c5dd188c291c8))
- don't clear session during auto-rejoin (#1957) *(runt-mcp)*([0672237](https://github.com/nteract/desktop/commit/0672237de086da5037ea401a5678f4528f1aee03))
- enable panic=unwind for MCP server to fix silent connection drops (#1959) *(runt-cli)*([288ea23](https://github.com/nteract/desktop/commit/288ea23632b4a047b6ba4ec98d0aa444671396a5))
- survive daemon disconnect during kernel restart (#1949) *(runt-mcp)*([2daac0b](https://github.com/nteract/desktop/commit/2daac0b6c98590452702ab0107e76b5da6df2f2d))
- codex follow-ups on PR #1960 captured-env flow (#1962) *(runtimed)*([241d42c](https://github.com/nteract/desktop/commit/241d42c7b52a6b1cb8e79670b030b3349843877e))
- preserve captured envs on room eviction for saved notebooks (#1963) *(runtimed)*([0ae63c3](https://github.com/nteract/desktop/commit/0ae63c3c79a126d682c27f518db5a4a4c887a876))
- let the last column resize and absorb viewport slack (#1965) *(sift)*([1a56f83](https://github.com/nteract/desktop/commit/1a56f832b64ad7eb22f025732b3aaf240e83e5cb))
- refresh trust state after file-watcher merges external edits (#1976) *(runtimed)*([79a5023](https://github.com/nteract/desktop/commit/79a5023ac5c6f58113069292f0df112d3fbdc42c))
- clippy drift (#1974) *(runtimed-node)*([f993dd6](https://github.com/nteract/desktop/commit/f993dd65c8c573167cd33c32670c3ddd9ccaa143))
- Option D - pre-send initial sync frame before spawning handler (#1981) *(runtimed)*([5e4ecee](https://github.com/nteract/desktop/commit/5e4eceef97a5cc60b8ce96c48751ae26c0e387df))
- UTF-8 safe string truncation in debug logger (#1982) *(runt-mcp)*([6cded6c](https://github.com/nteract/desktop/commit/6cded6cfc9ed1839e5a43f89f46b9d91a6e7dbbb))
- respect bar_style and bar_color on progress bars (#1991) *(widgets)*([da97389](https://github.com/nteract/desktop/commit/da9738963d60f56768bb4178ace3ac1accbefb02))
- unset RUNTIMED_DEV/WORKSPACE_PATH before exec (#1992) *(plugin)*([02aab5b](https://github.com/nteract/desktop/commit/02aab5bd06775707c81ee9792590d0a1f5b23103))
- drop runt-mcp health loop, drive state from DaemonConnection (#2000) (#2004) *(mcp)*([ba7d7ba](https://github.com/nteract/desktop/commit/ba7d7ba310dd0cd73036f395d2d8a123ecde4231))
- bump runt-workspace dep budget 25 → 35 (#2005) *(xtask)*([111f277](https://github.com/nteract/desktop/commit/111f277217a95558ccfd1ec8ecade5876fd6e1ac))
- preserve late sync frames during connect (#2006) *(notebook-sync)*([9665b8a](https://github.com/nteract/desktop/commit/9665b8a46d93029a934e7bfdf6062b18099956c2))
- respawn child after transport closes (follow-up to #2004) (#2008) *(mcp-proxy)*([0816123](https://github.com/nteract/desktop/commit/08161237fa444a939a3c5ce6ae6cc531bb56dd05))
- treat empty-string env vars as unset in is_dev_mode() (#2011) *(runt-workspace)*([1b4140a](https://github.com/nteract/desktop/commit/1b4140a71d981e8f5916fe43811a01bf6c253457))
- show +dirty marker in dev banner and embedded binary versions (#2020) *(version)*([b932dd9](https://github.com/nteract/desktop/commit/b932dd992acd93082d95e240da0abb9b5318fb7b))
- use not_in exclusion filters for high-cardinality categories (#2022) *(sift)*([d475802](https://github.com/nteract/desktop/commit/d475802ca8efe1b39897056ac7f5d62915fa61c9))
- accept v2 clients on v3 daemon for upgrade compat (#2025) *(daemon)*([15cce2d](https://github.com/nteract/desktop/commit/15cce2ddf533e64f15bdc38a9416255f6cfc2221))
- downgrade NotebookConnectionInfo protocol for v2 clients (#2026) *(daemon)*([68f88fa](https://github.com/nteract/desktop/commit/68f88fa8b2a135c947f7a3c7708ef9766c6fcf0a))
- accept ISO-8601 timestamps, null on type mismatch (#2034) *(sift-wasm)*([a3a653f](https://github.com/nteract/desktop/commit/a3a653fd0f4212a7b972e0f375035b1e94d6272d))
- CreateNotebook auto-launch races CRDT dep sync (#2037) *(runtimed)*([9013d1d](https://github.com/nteract/desktop/commit/9013d1d4d713dbc02194a7c44a9225ec62529ff6))
- update .pyi stub for new create_notebook params (#2041) *(runtimed-py)*([5bbd002](https://github.com/nteract/desktop/commit/5bbd00240ab1c6d1a2281107806a7a6ebc0cff96))
- gate binary MIMEs + wire Sift into MCP App renderer (#2040) *(structured)*([65817a8](https://github.com/nteract/desktop/commit/65817a8c41b5557c8e1ac74a7674c2f3a275d0ba))
- replace expect panics with graceful returns in output writers (#2046) *(notebook-doc)*([b27bf90](https://github.com/nteract/desktop/commit/b27bf901bdbecc4762b801290cc1e06944f841ec))
- gitignore nteract-mcp sidecar binaries (#2047) *(notebook)*([8567adc](https://github.com/nteract/desktop/commit/8567adc8850cdaf591f72db4de0140eec3fd65ca))
- validate and alias package_manager across APIs (#2043)([bae6997](https://github.com/nteract/desktop/commit/bae6997faa53e3f601e8dfe71c0e5dd091a8fe7c))
- align detect_manager_from_metadata priority with other detectors (#2049) *(runtimed)*([6b330d0](https://github.com/nteract/desktop/commit/6b330d019c91642f5b2880f1bdb88fc489beda33))
- embed sift.js and sift.css in daemon (#2051) *(runtimed)*([df15f71](https://github.com/nteract/desktop/commit/df15f718c010182c9407a5df99ec25cc884046d9))
- poll RuntimeStateDoc for wait_for_ready instead of broadcast (#2066) *(runtimed-py)*([4f53400](https://github.com/nteract/desktop/commit/4f534004fb1e0787deafbeec24c392e2ad694eb6))
- run pnpm install before build_mcp_widget in build flows (#2070) *(xtask)*([43a20d1](https://github.com/nteract/desktop/commit/43a20d11069597e604f2d0898c0d43e885c0143f))
- eliminate TOCTOU race in trust signature approval (#2079) *(notebook)*([cc7ba1a](https://github.com/nteract/desktop/commit/cc7ba1a2bcf32508e63354774ec6a79a8c3d63b5))
- migrate v3 schema docs instead of discarding them (#2080) *(notebook-doc)*([b73a00b](https://github.com/nteract/desktop/commit/b73a00b8b519dfdf154d0f9be6be25f7ea4e9f4f))
- parse string-typed deps instead of silently dropping (#2084) (#2087) *(runt-mcp)*([ad55a35](https://github.com/nteract/desktop/commit/ad55a3506d50f3328628e0d4c7563abea7f0d291))
- disconnect previous session on notebook switch (#2088) *(runt-mcp)*([8b630e5](https://github.com/nteract/desktop/commit/8b630e5073689305d837b1c742d593c6b575b75e))
- bootstrap environment.yml deps into CRDT at auto-launch (#2097) *(runtimed)*([6007ac8](https://github.com/nteract/desktop/commit/6007ac847dfe14c769989f9171ba2bd0c7051d2a))
- pixi RPC path publishes MissingIpykernel reason (#2102) *(runtimed)*([4f34076](https://github.com/nteract/desktop/commit/4f34076c522d0213442d32995d64cb4079a73afd))
- unflake integration suite under parallel load (#2110) *(runtimed)*([7f77e5f](https://github.com/nteract/desktop/commit/7f77e5fe6b8e2bed3e5e7c74068050b69e2fec19))
- drop needless return in Windows cli_install branch (#2112) *(notebook)*([85450b0](https://github.com/nteract/desktop/commit/85450b0693c61599b850e9835d4873092e9403c0))
- daemon-owned trust re-sign and settings broadcast coalescing (#2121) *(runtimed)*([933b210](https://github.com/nteract/desktop/commit/933b2109f9b2e08b0962d8ac7345d7534baf19b7))
- emit MissingIpykernel for uv and conda envs (#2117) *(runtimed)*([439abc8](https://github.com/nteract/desktop/commit/439abc837127cbb8f1a714885a48a06d454bf0c8))
- don't delete content-addressed inline caches + tear down agent on restart-time MissingIpykernel (#2123) *(runtimed,notebook)*([390e864](https://github.com/nteract/desktop/commit/390e8646346f43b3e1771cb0f04ba8ecff51baca))
- reject PEP 508 extras in conda/pixi deps before they reach the kernel (#2124) *(notebook-doc)*([8a50f09](https://github.com/nteract/desktop/commit/8a50f0986b191b0cefbfc45a748034f4bdc488f7))
- push timestamp formatting to WASM, fix Invalid Date on Date32 columns (#2125) *(sift)*([d8bb857](https://github.com/nteract/desktop/commit/d8bb857c6f96e2153db552af2416e63149cfefe5))
- allow conda MatchSpec attribute brackets (`[key=value]`) (#2126) *(notebook-doc)*([a207b09](https://github.com/nteract/desktop/commit/a207b09e7e2ca0585f089eedf7ca34d6cc80c403))
- rename pool env to inline cache after sync so restarts cache-hit (#2127) *(runtimed)*([1a159b8](https://github.com/nteract/desktop/commit/1a159b80ed53ce0c3bbb6c01ddaeb0908350bf40))
- thread bootstrap_dx through try_uv_pool_for_inline_deps (#2128) *(runtimed)*([d3a79c9](https://github.com/nteract/desktop/commit/d3a79c99deb4041f783e6b4ea01e3ecec1547b64))
- prevent duplicate dep promotion in environment.yml (#2129) *(runtimed)*([db20477](https://github.com/nteract/desktop/commit/db204773a594664ae15cf647db01a40eb0d11d81))
- warn when environment.yml dedup parse fails (#2131) *(runtimed)*([eac3dd4](https://github.com/nteract/desktop/commit/eac3dd4a3f906eb3f40881afcf59a2d453638c3a))
- fix CRLF corruption and hardcoded indent in env.yml promotion (#2133) *(runtimed)*([d61acb8](https://github.com/nteract/desktop/commit/d61acb81bb242b6b4514d408c5b20c15bbb2ae1d))
- pass all deps to conda solver in pool env additive path (#2137) *(runtimed)*([5cb0bc5](https://github.com/nteract/desktop/commit/5cb0bc5668a687f25ab54074893933db5269b866))
- await blob port in bootstrap to prevent binary output on reload (#2140) *(notebook)*([2b09b09](https://github.com/nteract/desktop/commit/2b09b094259263db539a237793ea896a05ad75d9))
- validate conda inline cache has all requested packages (#2143) *(runtimed)*([f4f1726](https://github.com/nteract/desktop/commit/f4f17260da23c949147769f12d435e3900da7e5c))
- clear session on ephemeral notebook eviction to stop reconnect loop (#2145) *(runt-mcp)*([30c307f](https://github.com/nteract/desktop/commit/30c307fc9c36ed492b98f634361ca3b6d03dbe9e))
- preserve initial_target until rejoin succeeds (#2146) *(runt-mcp)*([5bf59f4](https://github.com/nteract/desktop/commit/5bf59f4edb8e66c676fe305d4f70737af39d31a8))
- promote blob-ref MIME on DisplayHandle.update() (#2147) *(output_store)*([e7a7bdb](https://github.com/nteract/desktop/commit/e7a7bdbe812317b0b829e125445f06d65627f125))
- adopt live Vite, don't sweep-and-respawn (#2149) *(mcp-supervisor)*([51fc36f](https://github.com/nteract/desktop/commit/51fc36f77a3dd15acd7b23f3b13b06661705a937))
- auto-sign project-file deps at bootstrap (#2148) *(runtimed)*([a383e5d](https://github.com/nteract/desktop/commit/a383e5d93d93189d7cf53bfd7e1762207d7cb44d))
- include kernel stderr in early-exit diagnostics (#2154) *(runtimed)*([18a1f49](https://github.com/nteract/desktop/commit/18a1f494b245c96e5536cdd94a15388b2f921de9))
- inject launcher PYTHONPATH for conda:env_yml spawn (#2161) *(runtimed)*([ac84eb0](https://github.com/nteract/desktop/commit/ac84eb0f9603e7908bf215e33008cbf17b66cedc))
- heal unsigned project-file-matching trust at room init (#2158) *(runtimed)*([423625d](https://github.com/nteract/desktop/commit/423625d2e0e8b33ddae1ae32d5989324ed9723c8))
- show_notebook displays correct title for path-resolved rooms (#2165) *(notebook)*([e71ff2f](https://github.com/nteract/desktop/commit/e71ff2fe48b191e7b36dc17762fb591bac4fda09))
- raise blob-spill preview caps and add get_cell full_output opt-in (#2166) *(mcp)*([813fa48](https://github.com/nteract/desktop/commit/813fa486210228633c16bd284e7a277771ededcd))
- surface typed error for missing conda env.yml env (#2167) *(runtimed)*([ac0dfea](https://github.com/nteract/desktop/commit/ac0dfeaf2a7c94036eef1e4dfb4887b4065f64cd))
- remove osascript credential prompt on every upgrade (#2171) *(notebook)*([afc16a4](https://github.com/nteract/desktop/commit/afc16a4e861de42f67b48321318299722f907185))
- settings window links, default size, and dead constant (#2172) *(notebook)*([b872358](https://github.com/nteract/desktop/commit/b872358b04494a045f713335155eb92b51dc7b20))
- stop autosave from rewriting .ipynb on open (#2168) *(runtimed)*([cc95e44](https://github.com/nteract/desktop/commit/cc95e441a232f78bc6369a1eef29286df9b641da))
- wrap raw AsyncSession in Notebook for runtime access (#2174) *(test)*([26688f4](https://github.com/nteract/desktop/commit/26688f481be3f669cb5168b39114540f2b2c0fa2))
- route inline-dep notebooks with version specifiers through the pool (#2173) *(inline-env)*([ccc47e4](https://github.com/nteract/desktop/commit/ccc47e41ee286b31387598d8cefc1def7463ad1a))

### Documentation

- sync agent + contributor docs to current architecture (#1846)([528fb9f](https://github.com/nteract/desktop/commit/528fb9f3ece815d5f20d69ac3cf688a477ea4f01))
- mark blob GC and ipynb blob-ref specs as shipped (#1869)([a74244a](https://github.com/nteract/desktop/commit/a74244aa71c5155c63f2f30725f770f94149cc97))
- document the @nteract/notebook-host abstraction (#1894)([bf12c70](https://github.com/nteract/desktop/commit/bf12c70abc03509f412725d6ade300e62504896a))
- explain the two-path output materialization (#1931) *(outputs)*([d0017ef](https://github.com/nteract/desktop/commit/d0017efcc301753be635c1d2d67e42afa7674171))
- audit tokio::spawn panic handling in runtimed (#1926)([cf5f3a2](https://github.com/nteract/desktop/commit/cf5f3a2dd6afcbc2996147ca262aacd8dfb3b196))
- lead with positive voice for daemon lifecycle (#1940)([56171be](https://github.com/nteract/desktop/commit/56171be3ac4f877aa09ae44e214ea2cd1693dff9))
- unified env resolution design and invariants (#1966)([34a45e8](https://github.com/nteract/desktop/commit/34a45e8397609f2fa3bb0ea99fddb5cc07b54c91))
- fix stale rattler references after kernel-launch cleanup (#2007)([cd8a454](https://github.com/nteract/desktop/commit/cd8a45445a4de1bd6489ea522d74f78dda8c2e85))
- replace Biome reference with vp in AGENTS.md (#2024)([17ae6a9](https://github.com/nteract/desktop/commit/17ae6a957c01f07bc852e231731bd3535533b5cd))
- lead with plugin install; slim PyPI README to a stub (#2036)([80c56e5](https://github.com/nteract/desktop/commit/80c56e5798c807c8cece14bc28c7ce66156dba67))
- add Install Extension for Claude (Desktop) flow (#2039) *(readme)*([41076d1](https://github.com/nteract/desktop/commit/41076d1dfac5d90de97e2ac24ac493ef6ffca2e7))
- update room substruct spec after PR 0 + PR A (#2069)([02825ea](https://github.com/nteract/desktop/commit/02825eab266189bb7f9c2ac37305034ff987a5f9))
- update mime.rs module doc — TS isBinaryMime is gone (#2106) *(notebook-doc)*([e809013](https://github.com/nteract/desktop/commit/e809013f7018bc39119a9ee501107adaefb82d3f))
- rewrite bootstrap_dx feature flag copy (#2162) *(settings)*([746de09](https://github.com/nteract/desktop/commit/746de0984190f86b49acdcfc21a88c18b6283f3d))

### Features

- enrich create_notebook response, respect project env (#1831) *(runt-mcp)*([ee06423](https://github.com/nteract/desktop/commit/ee064230ea805de5f2d605d906b492dcbb6cb2c1))
- llm_preview fields for blob-spilled stream and error outputs (#1829) *(runtimed)*([44de8c3](https://github.com/nteract/desktop/commit/44de8c309b78431550674358acef65b8503dd1ab))
- shared await_execution_terminal helper (#1833) *(notebook-sync)*([d13c392](https://github.com/nteract/desktop/commit/d13c392cf45deea20cd9a25b12e41a7380e4af7b))
- UUID-first notebook identity (#1838)([0b4cb46](https://github.com/nteract/desktop/commit/0b4cb468c1c36c73ee6e7d0af13cda8c0ff5ad9a))
- add install-nightly for headless Linux first-install (#1851) *(xtask)*([06f04e6](https://github.com/nteract/desktop/commit/06f04e6072548ddf67c90929ab19f5ee1703a39c))
- bump terminal width from 80 to 128 columns (#1862) *(runtimed)*([6fbc9e4](https://github.com/nteract/desktop/commit/6fbc9e4bde0b65ac85fdcb35ed79774726a1f967))
- use text/plain directly for small DataFrames in text/llm+plain (#1865) *(dx)*([2138d03](https://github.com/nteract/desktop/commit/2138d033fe006384b9a4dce1e3b83a0cff8d9266))
- add macOS x64 (Intel) binaries to release pipeline (#1867) *(ci)*([d7da910](https://github.com/nteract/desktop/commit/d7da910aecc4dc68435c0b49a09c499ee489d75d))
- introduce @nteract/notebook-host — de-Tauri-ify the frontend (#1889) *(notebook-host)*([79b5215](https://github.com/nteract/desktop/commit/79b5215c3bbcb08d29d35325bb161cb4722bb9fa))
- HostWindow + onFocusChange (#1890) *(notebook-host)*([e4e7038](https://github.com/nteract/desktop/commit/e4e70383bda2c10478734c4de5e4638a58b6fb11))
- HostDialog + HostExternalLinks + HostUpdater (#1891) *(notebook-host)*([6ea9894](https://github.com/nteract/desktop/commit/6ea9894398fe55c236900ef294b7383ee3186ed0))
- add correlation id envelope for NotebookRequest/Response (#1895) *(protocol)*([98ce4c8](https://github.com/nteract/desktop/commit/98ce4c8756c831cf28d9a178ea79fd37a1f368b6))
- frame-based direct request/response via correlation id (#1897) *(transport)*([0986188](https://github.com/nteract/desktop/commit/0986188f9864c2198b285e0658b65cb54910af31))
- Node.js bindings for the runtimed daemon client (#1904) *(runtimed-node)*([dde5f28](https://github.com/nteract/desktop/commit/dde5f284408aa19ea89d90088b45de36c37496d7))
- Session.saveNotebook(path?) (#1928) *(runtimed-node)*([9086a2a](https://github.com/nteract/desktop/commit/9086a2a21c9c9aea8a49943b89016f448a9226ba))
- addressable outputs with output_id and display_index (#1933) *(notebook-doc,runtimed)*([2f1d06c](https://github.com/nteract/desktop/commit/2f1d06cdad6541210813b0ccc7ce21c054ac6003))
- parquet summarization and row reading via nteract-predicate (#1936) *(runtimed-node)*([69dcd1c](https://github.com/nteract/desktop/commit/69dcd1ccd583063354305f2d10fa801093cc5e8e))
- structural RPC refactor — correlation IDs + fire-and-forget (#1937) *(runtimed)*([2d98dae](https://github.com/nteract/desktop/commit/2d98daeafd5f6a11b3e412113d237174d894822f))
- add debug logging for MCP response payload analysis (#1938) *(runt-mcp)*([e6ae703](https://github.com/nteract/desktop/commit/e6ae7032c37ff33b3d95b94288bc969db0283c26))
- bootstrap dx into ipykernel via nteract-kernel-launcher (#1939) *(kernel)*([9fd3f9a](https://github.com/nteract/desktop/commit/9fd3f9aef50058bc2166232d96b5e18e24b06dd7))
- vendor nteract_kernel_launcher into kernel envs instead of pip-installing (#1952) *(kernel)*([5988d18](https://github.com/nteract/desktop/commit/5988d182c6025c050067de2b1da2ca05b76ff0a5))
- unified env hash + base-package constants (PR 1/3) (#1958) *(kernel-env)*([183b9f8](https://github.com/nteract/desktop/commit/183b9f84e40ef4e9a90079d6802632c8d5ce78f1))
- capture prewarmed env into notebook metadata (PR 2/3) (#1960) *(runtimed)*([6e13553](https://github.com/nteract/desktop/commit/6e13553e156e8fa8c42e483d613c0e2abafc0957))
- flush hot-synced deps and rename env dir on eviction (#1964) *(runtimed)*([51f0673](https://github.com/nteract/desktop/commit/51f0673a4f88a7a6384704f6312b782ce1add47a))
- add nteract marketplace with repl skill (#1987) *(plugin)*([6665740](https://github.com/nteract/desktop/commit/66657402a17e4fe6f8d701de87424cd87d72219d))
- add nteract-nightly plugin variant (#1989) *(plugin)*([3932de5](https://github.com/nteract/desktop/commit/3932de5d91e36b30a0ded6f65979837248d59726))
- replace rattler with GitHub release downloads (#1998) *(kernel-launch)*([9b95ce9](https://github.com/nteract/desktop/commit/9b95ce9e688d13afb415fec1b277456400e5ed02))
- add Open Recent submenu to File menu (#1999) *(notebook)*([4a6bc32](https://github.com/nteract/desktop/commit/4a6bc32d83080f3ed2d0f3f919e8adfb84a72ce1))
- stamp output_id as stable React key across renderers (#2017) *(outputs)*([7256ded](https://github.com/nteract/desktop/commit/7256ded1ef8708ebd87de14a427359ffa71126b4))
- add explicit session status bootstrap (#2018) *(notebook-sync)*([88d670e](https://github.com/nteract/desktop/commit/88d670e975fedc32170e7cd7afcfd99f22577605))
- add opt-out daily heartbeat pings (#2028) *(telemetry)*([e734405](https://github.com/nteract/desktop/commit/e7344052ad194f55fb45434a98dde1ce1b36c86d))
- publish Claude Code plugin to nteract/claude-plugin[-nightly] (#2029) *(ci)*([cbbfdbb](https://github.com/nteract/desktop/commit/cbbfdbbc5043ad0d0c1144643edfc89fb0d35c0a))
- write Parquet from Arrow IPC or SQLite rows (#2032) *(sift-wasm)*([c463f74](https://github.com/nteract/desktop/commit/c463f741239a46621f9191c70d9209e1ebe48754))
- add pixi support to Python Notebook dep helpers (#2045) *(runtimed-py)*([5bf7f97](https://github.com/nteract/desktop/commit/5bf7f974abb9a3bf6e6876befacd0c3129fe64df))
- prefer stable blob server port per channel (#2054) *(runtimed)*([65c791d](https://github.com/nteract/desktop/commit/65c791de79d0e28ba6e1442301487558f09b902c))
- verify-plugins drift check for renderer bundles (#2063) *(xtask)*([ce421b5](https://github.com/nteract/desktop/commit/ce421b53f7d7e965fd013a7ee9570d902635bc84))
- chain renderer-plugins after sift-wasm rebuild (#2068) *(xtask)*([f3b42ed](https://github.com/nteract/desktop/commit/f3b42edfea003a93796ced262767cc8e9ef03eea))
- RuntimeLifecycle enum (phase 1 — derived field only) (#2081) *(runtime-doc)*([57e96c8](https://github.com/nteract/desktop/commit/57e96c83256bb488f0fefe1e31cac7c09f2a2fdd))
- RuntimeLifecycle CRDT keys + typed writers (phase 2) (#2085) *(runtime-doc)*([33c4150](https://github.com/nteract/desktop/commit/33c41503f22ece5e03b292f6ed7a01a2ac41512b))
- typed KernelErrorReason + set_activity stale-phase fix (#2091) *(runtime-doc)*([28589f5](https://github.com/nteract/desktop/commit/28589f58e2d6278353a58eeb81c5f9a6707f3fb3))
- route ErrorBoundary errors through host logger (#2101) *(notebook-app)*([df19f29](https://github.com/nteract/desktop/commit/df19f297952e8ab71394703e6b32ee6cbc0f36ba))
- migrate session_core to typed RuntimeLifecycle + Python constants (#2100) *(runtimed-py)*([56e0e36](https://github.com/nteract/desktop/commit/56e0e3630ccd641356563bc06e10b57ae0228c1c))
- install console_error_panic_hook (#2105) *(runtimed-wasm)*([1c53cd1](https://github.com/nteract/desktop/commit/1c53cd18ce3e546eac0620fb11c0470d96390739))
- explicit consent CTA + Privacy pane + install ID rotation (#2109) *(telemetry)*([2ed6840](https://github.com/nteract/desktop/commit/2ed68401b6d098d4573ea06235b24d670160865c))
- timezone-aware timestamp display (#2134) *(sift)*([175ed7a](https://github.com/nteract/desktop/commit/175ed7a31f51e64ab32793f63134ef808cbb124c))
- vendor nteract-kernel-launcher with display bootstrap in-binary (#2135) *(launcher)*([5ec99f5](https://github.com/nteract/desktop/commit/5ec99f5f598355d24d0741579eda176ae9ffa8f2))
- rich traceback renderer + break plugin-log feedback loop (#2138) *(outputs)*([95e7c91](https://github.com/nteract/desktop/commit/95e7c917a856125cf61c593fc479fd145ad4d946))
- show time precision for Timestamp columns in cell display (#2139) *(sift)*([611e48e](https://github.com/nteract/desktop/commit/611e48e8680ba71a5e0df13cc28adc9b743be55f))
- rich traceback emission via short-circuiting _showtraceback (#2141) *(launcher)*([7cab987](https://github.com/nteract/desktop/commit/7cab987db92bf7d858bf6fbe0b911e65ea58a570))
- UserErrorOutput semantic type (foundation for traceback round-trip) (#2142) *(runtimed)*([3662f56](https://github.com/nteract/desktop/commit/3662f56db31cb011e5da1d1fd3c58e15193ac770))
- wire UserErrorOutput through runtime state + manifest (#2144) *(runtimed)*([bd2b744](https://github.com/nteract/desktop/commit/bd2b744d8887cbdbdb05ae7591afbb8df60ad2b5))
- frame cap, SyntaxError layout, single-frame inline evalue (#2153) *(traceback)*([b024b45](https://github.com/nteract/desktop/commit/b024b45be16810b3625ade11c21349a275fdaa30))

### Performance

- optimize third-party deps in dev + disable incremental for sccache (#1901) *(build)*([6c3e812](https://github.com/nteract/desktop/commit/6c3e812267f85e82c0bd1f5513ab3846c00a2f36))
- eliminate prop-alloc hot paths at output+widget boundary (#1914) *(outputs)*([f355151](https://github.com/nteract/desktop/commit/f355151a2efbdfd68178885c4cf168ca34527ae6))
- skip cargo build when binary exists (#2019) *(mcp-supervisor)*([ea08f15](https://github.com/nteract/desktop/commit/ea08f1527b680719cd6411e5aac660661d755f4e))
- exclude inlined WASM from renderer plugin bundle (7.4 MB -> 382 kB) (#2136) *(sift)*([15374c0](https://github.com/nteract/desktop/commit/15374c0431376bd75b2c580d724f6a67de01009d))

## Frequency / raw counts
- total bullets across the series: 64 features, 135 fixes, 11 performance, 15 documentation, 1 other

---

# ENTRY 2.2  (individual)
- coversVersions: 2.2.0
- note: covers 2.2.0
- date (latest stable in series, ISO): 2026-04-15T20:01:05Z
- dateLabel (human range): April 15, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.2.0-stable.202604151939
- perVersionReleaseUrls:
    - 2.2.0 -> https://github.com/nteract/nteract/releases/tag/v2.2.0-stable.202604151939

## Technical changelog (faithful)
### 2.2.0 — April 15, 2026
### Bug Fixes

- show daemon error message in pool error banner (#1658) *(frontend)*([e04085a](https://github.com/nteract/desktop/commit/e04085aa980088baf4c1bf779853e98bfd5dc518))
- ephemeral notebook review cleanups (#1671) *(runtimed)*([3359216](https://github.com/nteract/desktop/commit/335921643f72a739b665b08b80b88442b2673f1f))
- auto-reset circuit breaker after cooldown (#1674) *(runt-mcp-proxy)*([321adb8](https://github.com/nteract/desktop/commit/321adb873bd8dd67ea580ddb9aabf2b6de0c1334))
- re-resolve child binary on every restart (#1677) *(runt-mcp-proxy)*([a812587](https://github.com/nteract/desktop/commit/a8125874e47480c77e5a745d4822c362540d81d5))
- coerce string booleans in MCP tool params (claude-code#32524) (#1678) *(runt-mcp)*([edb5d31](https://github.com/nteract/desktop/commit/edb5d31e92fee74c055c216e443c7bcfa900cc28))
- respect SKIP_MATURIN during file-change handling (#1679) *(mcp-supervisor)*([1ed4371](https://github.com/nteract/desktop/commit/1ed437146a496d4369f954fc4465884c61c80bf7))
- coerce string arrays in MCP tool params (claude-code#32524) (#1680) *(runt-mcp)*([b562604](https://github.com/nteract/desktop/commit/b562604bfc3426abbb776dc25b11ba8f61e719cb))
- auto-create directories on save + block ephemeral UUID saves (#1683) *(runtimed)*([c79d0e0](https://github.com/nteract/desktop/commit/c79d0e0a2fea1b0a23535d097d95fd3b2a116df9))
- defensive sweep for orphaned executions on kernel restart (#1690) *(runtimed)*([bab5fd1](https://github.com/nteract/desktop/commit/bab5fd152af6ac2ea5be69f25835f83c8b82d39e))
- graceful fallback for launch_app in headless environments (#1693) *(runt-mcp)*([53d2ffe](https://github.com/nteract/desktop/commit/53d2ffea0ea5ae006e5358b47c7ec8fb578339a0))
- parse UV checksum as hash+filename format (#1695) *(kernel-launch)*([f644f8b](https://github.com/nteract/desktop/commit/f644f8b0dffc88c0628a18419e5d45223da2f054))
- graceful kernel shutdown with signal escalation (#1696) *(runtimed)*([8bdffb5](https://github.com/nteract/desktop/commit/8bdffb5970fc905035552c20251b07ca6f9ebf3a))
- clean up ZeroMQ sockets when kernel dies (#1697) *(runtimed)*([ee2c48f](https://github.com/nteract/desktop/commit/ee2c48fcb111320f29daa4c6d958bd1b9c96bc9e))
- clone state objects in AFM model proxy to prevent readonly errors (#1698) *(widgets)*([92e6ed3](https://github.com/nteract/desktop/commit/92e6ed39a35c0571c84fcde4600ee8b4326bdb9c))
- add child process monitoring for transparent restarts (#1701) *(runt-mcp-proxy)*([48d24db](https://github.com/nteract/desktop/commit/48d24db27723cf84918f08ec275f4e9923b4a568))
- honor pool_size settings from settings.json (#1702) *(runtimed)*([967c7b1](https://github.com/nteract/desktop/commit/967c7b1aa7d9a9ce679142cdf888cf9dca6ce9ae))
- socket-aware daemon stop with signal escalation (#1704) *(runt)*([3005326](https://github.com/nteract/desktop/commit/3005326aa807a301be87f2813d46805518a3b2c5))
- runtime agent process groups for clean orphan reaping (#1717) *(runtimed)*([49f6df1](https://github.com/nteract/desktop/commit/49f6df1f01a85f93e762c96e877b7276291e88a8))
- check child transport state before skipping restart (#1722) *(mcp-proxy)*([1bd20da](https://github.com/nteract/desktop/commit/1bd20dac2d2ce65261909896d2d67afe48e13d78))
- eliminate triple compilation of shared crates (#1724) *(build)*([01b584e](https://github.com/nteract/desktop/commit/01b584eb0920e201cc5197aef548aab034210ef7))
- update Tailwind arbitrary value CSS vars to --sift-* names (#1726) *(sift)*([7ffa849](https://github.com/nteract/desktop/commit/7ffa849183c72761aa9a1d2c2e87311e3e3009b9))
- stop watching .git files in build scripts (#1727) *(build)*([258bc82](https://github.com/nteract/desktop/commit/258bc82e1810b87d4af7dcfea31ffaffa3bd5d86))
- env cleanup on room eviction and GC improvements (#1723) *(runtimed)*([b526496](https://github.com/nteract/desktop/commit/b52649636459cb928e81948afe9a33ca95829e70))
- wait for Automerge doc sync before mutating in integration tests (#1729) *(test)*([2213e65](https://github.com/nteract/desktop/commit/2213e65df7bd65b51bb817712d3873e999be9687))
- stop promote_inline_deps_to_project from removing project deps (#1733) *(runtimed)*([66c12e8](https://github.com/nteract/desktop/commit/66c12e88e92ead13360c4b2631922b55f71428eb))
- set current_runtime_agent_id in LaunchKernel request path (#1735) *(runtimed)*([ab12f14](https://github.com/nteract/desktop/commit/ab12f14d015173b3ca25ce5246e086bfafd7380c))
- skip stale Python rebuilds in warm builds (#1737) *(xtask)*([99c9cdd](https://github.com/nteract/desktop/commit/99c9cdd5be0a752f0eea8d07394eede84efcc400))
- gate shell_escape with #[cfg(unix)] to fix Windows warning (#1738) *(build)*([dd3986a](https://github.com/nteract/desktop/commit/dd3986aba94321644f1deae32b23c8cfa29de078))
- match output area width to CodeMirror editor (#1741) *(cell)*([248655f](https://github.com/nteract/desktop/commit/248655f2148d6d5d17019eb519dbaf10dafcfb23))
- replace shared watch<bool> with per-agent oneshot channel (#1743) *(runtimed)*([3154e2d](https://github.com/nteract/desktop/commit/3154e2dac8b79390e38f05b582e46e497457e30d))
- propagate colorTheme to iframe document element (#1745) *(iframe)*([6586cd5](https://github.com/nteract/desktop/commit/6586cd5fb48324a7e1d60feca19d9f5364af4174))
- default create_notebook working_dir to CWD for project detection (#1750) *(mcp)*([bb958d2](https://github.com/nteract/desktop/commit/bb958d21d6eb689f091e81ef19afdf3106bcd8f5))
- prevent GC from deleting pool envs mid-warmup (#1752) *(runtimed)*([87f0043](https://github.com/nteract/desktop/commit/87f0043a6ce7b4ef975ff01451f2a0ac4ea5dd2a))
- restore Classic Light syntax colors (#1753) *(editor)*([fdf31a8](https://github.com/nteract/desktop/commit/fdf31a819c3c68cb45aba1dfc340fdb641b4cc87))
- cell adder Tailwind classes + cream-aware iframe CSS vars (#1755) *(theme)*([acf6664](https://github.com/nteract/desktop/commit/acf66646f35a219056d8a6d28253480be9e5414f))
- use webkit-prefixed Fullscreen API for WKWebView compatibility (#1756) *(sift)*([f371577](https://github.com/nteract/desktop/commit/f371577547fa1de0b13545df416852367233fae3))
- enable Fullscreen API for output iframes (#1758) *(iframe)*([efe8cc7](https://github.com/nteract/desktop/commit/efe8cc76ad75872b03df9550c2df9ba8c230a1c9))
- handle LargeUtf8 string columns (pandas parquet default) (#1763) *(predicate)*([b84a9e1](https://github.com/nteract/desktop/commit/b84a9e1fae898bd77974096dc0e218435037bbca))
- increase virtualization overscan to prevent blank rows on fast scroll (#1764) *(sift)*([51a3d16](https://github.com/nteract/desktop/commit/51a3d16e787678f87048321bf54f0ccba1bfa11b))
- emit Ready after additive pool delta install (#1765) *(env-progress)*([bcc89a1](https://github.com/nteract/desktop/commit/bcc89a1759319fff45d3f406e00de568a60105b8))
- dx-dist artifact path — uv workspace writes to repo-root dist/ (#1775) *(ci)*([be10507](https://github.com/nteract/desktop/commit/be10507b5a4f1da1870229b0e2168cb9503fad7b))
- health-probe vite and reinstall on lockfile drift (#1778) *(supervisor)*([9188026](https://github.com/nteract/desktop/commit/91880266e38c43e7482fa8169f7d0d57096e96c6))
- render parquet via sift when pandas also emits HTML (#1779) *(mime-priority)*([53557d3](https://github.com/nteract/desktop/commit/53557d36f7fb5d5bae7ea7accf260fc1abbee6fe))
- fail the release when a PyPI publish step errors (#1781) *(ci)*([b34af2f](https://github.com/nteract/desktop/commit/b34af2fdfce5e89af948c07d8a19a9e699beb797))
- pin ruff to 0.15.10 and reformat dx integration tests (#1802) *(ci)*([c2c5642](https://github.com/nteract/desktop/commit/c2c56422de634951ebf187bc4523edf5ea835949))
- reconnect on sync-socket framing errors (#1805) *(runtime-agent)*([4537498](https://github.com/nteract/desktop/commit/45374982f58f1a12e88476061c5d79d133a541f0))
- author text/llm+plain wins over synth (#1808) *(output-resolver)*([51eddfe](https://github.com/nteract/desktop/commit/51eddfe0536bca6c07b3f2c0c967fb58c9262930))
- check env sync drift after kernel restart (#1810) *(runtimed)*([71ae91c](https://github.com/nteract/desktop/commit/71ae91c60a7cee4c6dc8c5c071c096484f272028))
- serve cached tools optimistically and bake in build channel (#1827) *(mcpb-runt)*([4fc2940](https://github.com/nteract/desktop/commit/4fc2940f11558e857636f890e7c6a28f2571da8b))

### Documentation

- document daemon isolation setup and add supervisor failsafe (#1700)([8370da0](https://github.com/nteract/desktop/commit/8370da0fad47b372dd9139c5b7607e6df480f830))
- update agent-facing docs to the up/down/status supervisor surface (#1784)([c95b64d](https://github.com/nteract/desktop/commit/c95b64d19a85c4996f616a2b72376d65234bb7ec))
- extend _format_install module docstring to cover ipython_display path (#1785) *(dx)*([354c217](https://github.com/nteract/desktop/commit/354c217faff53657f12753adabc9fc90fb1456a4))
- refresh stale RoomKernel/kernel_manager.rs references (#1791)([4a83eea](https://github.com/nteract/desktop/commit/4a83eea7dc6cd7d619b5875015eb28f7fd2477d2))
- add test_dx_integration.py setup + run instructions (#1792) *(testing)*([2cfb081](https://github.com/nteract/desktop/commit/2cfb0816984709b310ce680a3122925bb0f517bf))
- rewrite README for PyPI display (#1821) *(dx)*([58cff24](https://github.com/nteract/desktop/commit/58cff246e0bfef0ba659c30287b9bb0fce304ea3))

### Features

- enable conda hot-sync for inline dependencies (#1661) *(runtimed)*([0627c33](https://github.com/nteract/desktop/commit/0627c33b2e46ff7720d20ba9b70bf955d910f31b))
- return per-cell outputs from run_all_cells (#1662) *(runt-mcp)*([e1eb16c](https://github.com/nteract/desktop/commit/e1eb16cc2c53d28c74a3aaf37f9f8592bca943ec))
- content-aware multi-cell renderer with dev preview (#1665) *(mcp-app)*([7221be4](https://github.com/nteract/desktop/commit/7221be4eb20e3c6e3b524a0141c4eaa7df8dd212))
- add 'kernel' alias for 'runtime' in create_notebook (#1670) *(runt-mcp)*([99d8797](https://github.com/nteract/desktop/commit/99d87979fa55699c337a02df157f5c011978f8f9))
- ephemeral notebooks for MCP agents (#1669) *(runtimed)*([7ab1efb](https://github.com/nteract/desktop/commit/7ab1efb1d731e709ed7493398d52aea84f44f7e3))
- blob store GC for orphaned blobs (#1672) *(runtimed)*([8391471](https://github.com/nteract/desktop/commit/83914719d16758a03a735231f4aeb5eb1a9770d7))
- add nteract Codex and Claude plugin configs (#1666) *(plugins)*([521d0fc](https://github.com/nteract/desktop/commit/521d0fc6799af95e49be4339f5e4e0108b51f79c))
- dynamic pool size configuration via settings doc (#1694) *(runtimed)*([b7732f5](https://github.com/nteract/desktop/commit/b7732f5dfed6c5e01b5c0d5495d194b9eab679f6))
- offline-first environment resolution (#1699) *(kernel-env)*([15d0394](https://github.com/nteract/desktop/commit/15d0394c58673b44a4478da6327b413143084a3a))
- pool warming with network failure detection (#1703) *(runtimed)*([c214d48](https://github.com/nteract/desktop/commit/c214d48cf5e95cfd9939140d56c84473b81f435d))
- persist conda/pixi lock files for offline re-creation (#1705) *(kernel-env)*([908f3c5](https://github.com/nteract/desktop/commit/908f3c5c9dec88cfdd5279ec4c2eed409cc8d00a))
- add @nteract/sift as packages/sift in monorepo (#1709) *(sift)*([703f7f6](https://github.com/nteract/desktop/commit/703f7f663ecb0e31eef5b0eb207bafe509a1d91f))
- standalone renderer plugin test app (#1718) *(renderer-test)*([d89d2f7](https://github.com/nteract/desktop/commit/d89d2f75a7b2d837c702a9e6e405f67bd8bc47a0))
- add parquet support to SiftTable url prop (#1720) *(sift)*([62cc46d](https://github.com/nteract/desktop/commit/62cc46d5cbfb3030dfcfab57168025b741907712))
- add theme picker with Classic and Cream themes (#1725) *(sift)*([0cba8b3](https://github.com/nteract/desktop/commit/0cba8b36e6e6d369f111c6fdcaad89e6a616da3e))
- parquet renderer plugin, WASM blob server, color theme settings (#1730) *(sift)*([1436329](https://github.com/nteract/desktop/commit/14363293abc84014414215fd86d053281771f9ec))
- whole-app cream theme with CodeMirror support (#1739)([140fabe](https://github.com/nteract/desktop/commit/140fabeefa6f4c993ca0a8d9c0816ce00774d40f))
- warm accent colors for cream theme (#1740) *(theme)*([813c488](https://github.com/nteract/desktop/commit/813c4888ec4c1bc8547b217303230ef13532af2e))
- own CodeMirror themes, replace Prism with Lezer static highlighting (#1742) *(editor)*([4b44adb](https://github.com/nteract/desktop/commit/4b44adb8bf0aacd66f5b043e94083cbdd7793246))
- parquet summaries for LLM + nteract-predicate/sift-wasm crate split (#1759) *(mcp)*([8188bcb](https://github.com/nteract/desktop/commit/8188bcb853b57e632ffe379d95b2ad84caf3819a))
- nteract/dx — data-experience library for Python kernels (#1762) *(dx)*([5c2e5fd](https://github.com/nteract/desktop/commit/5c2e5fdc1a192b4de777bd2edf19fe2a22a33607))
- use project's real conda env for conda:env_yml notebooks (#1766) *(conda)*([cc0706f](https://github.com/nteract/desktop/commit/cc0706fa2dd9942457494e2762ff574027ac3365))
- save ipynb with blob refs instead of base64 (spec 2) (#1769) *(runtimed)*([2350ff3](https://github.com/nteract/desktop/commit/2350ff3b872923078babf8f692a3794136ce3e6b))
- blob GC correctness (spec 1) (#1770) *(runtimed)*([e8b4953](https://github.com/nteract/desktop/commit/e8b49535ff3ae54bc9d9ecd82623b7fa6bc53454))
- expose reconnect tool on the standalone MCP proxy (#1776) *(mcpb)*([00492df](https://github.com/nteract/desktop/commit/00492df4d6429692be48cf77f3c6b5bda159a90b))
- consolidate tool surface — up, down, status, logs (#1777) *(supervisor)*([5724c04](https://github.com/nteract/desktop/commit/5724c04c90044354ddf9656408f32731178197a5))
- register ipython_display_formatter handler for DataFrames (#1780) *(dx)*([22001e7](https://github.com/nteract/desktop/commit/22001e733afce429b5ac37007ece8de49904d4dc))
- register formatters for narwhals DataFrame wrappers (#1782) *(dx)*([df439c7](https://github.com/nteract/desktop/commit/df439c7e330d30cfb7c4577047789626b0bf6569))
- add GetDaemonInfo request as replacement for daemon.json (#1803) *(protocol)*([f35c3c0](https://github.com/nteract/desktop/commit/f35c3c0e187ff2c9f0f9f0e3ff2c20ee48470654))
- query_daemon_info helper prefers socket (#1804) *(runtimed-client)*([9b8d988](https://github.com/nteract/desktop/commit/9b8d9882535a98ae9357c27bb775938f59dc198d))
- cap Presence frames at 1 MiB in recv_typed_frame (#1806) *(protocol)*([ab5c0bd](https://github.com/nteract/desktop/commit/ab5c0bdc1d756a387de00c4a7810b1c796599859))
- richer per-column stats + Dataset handler in text/llm+plain (#1809) *(dx)*([a43b2a8](https://github.com/nteract/desktop/commit/a43b2a8ab5b4d2b2f300e0abc79506210fc2eb74))
- DaemonConnection — long-lived daemon session (Phases 1–3) (#1823) *(runtimed-client)*([10c3434](https://github.com/nteract/desktop/commit/10c34349c6a56805a9ec0310ab231de76a99e698))

### Performance

- trim tool descriptions to reduce context cost (#1688) *(runt-mcp)*([0d7061f](https://github.com/nteract/desktop/commit/0d7061f23987811bdfca65981d3ed91f6f151c98))

## Frequency / raw counts
- total bullets across the series: 33 features, 49 fixes, 1 performance, 6 documentation

---

# ENTRY 2.1  (grouped)
- coversVersions: 2.1.0, 2.1.1, 2.1.2, 2.1.3
- note: covers 2.1.0–2.1.3
- date (latest stable in series, ISO): 2026-04-09T01:28:07Z
- dateLabel (human range): April 6–9, 2026
- canonicalGithubReleaseUrl: https://github.com/nteract/nteract/releases/tag/v2.1.3-stable.202604090105
- perVersionReleaseUrls:
    - 2.1.3 -> https://github.com/nteract/nteract/releases/tag/v2.1.3-stable.202604090105
    - 2.1.2 -> https://github.com/nteract/nteract/releases/tag/v2.1.2-stable.202604071001
    - 2.1.1 -> https://github.com/nteract/nteract/releases/tag/v2.1.1-stable.202604070058
    - 2.1.0 -> https://github.com/nteract/nteract/releases/tag/v2.1.0-stable.202604061948

## Technical changelog (faithful)
### 2.1.3 — April 9, 2026
### Bug Fixes

- avoid holding notebook_rooms lock across .await points (#1614) *(runtimed)*([b958197](https://github.com/nteract/desktop/commit/b9581979f7bfc64641c5a43361f23b26ad4f98f8))
- address code review — rehypeRaw, blob fetch fallbacks (#1617) *(mcp-app)*([c2872da](https://github.com/nteract/desktop/commit/c2872dacaa8c0bcfd40c106c2924a066442de3f6))
- parse JSON arrays in `config set` instead of blind comma-split (#1621) *(runt)*([1dd70b4](https://github.com/nteract/desktop/commit/1dd70b419041cba1c3e4af1e63fd302d2c70238f))
- classify pool errors, show contextual banner messages (#1623) *(runtimed)*([e741e3a](https://github.com/nteract/desktop/commit/e741e3a428a86ea99fa5be9415c73fc0118e8604))
- add lfs: true to release Python wheel builds, bump v2.1.3 (#1627) *(ci)*([57f77f4](https://github.com/nteract/desktop/commit/57f77f4c25f4f13549abf8fd9d1eda1d8efb99f3))
- add connectDomains and tile CDN to MCP App CSP (#1632) *(mcp-app)*([ba22d88](https://github.com/nteract/desktop/commit/ba22d8827873eb49dd7407fd6f115bb12e90d78a))
- respect default_python_env in create_notebook (#1634) *(mcp)*([f43d825](https://github.com/nteract/desktop/commit/f43d825cb09e9056cb43b8ca1dd584a4374cc5a7))
- add mcpb-runt sidecar to all CI workflow build steps (#1635) *(ci)*([65a57f8](https://github.com/nteract/desktop/commit/65a57f85fb8496b4237c109cf4aa90a490496582))
- avoid holding notebook_rooms lock across .await in eviction handler (#1637) *(runtimed)*([3d69c9a](https://github.com/nteract/desktop/commit/3d69c9a46bb325a3e9eb9e30510e33a716459a86))
- prevent stale asset resolution in materialization pipeline (#1639) *(notebook)*([c8d3a0a](https://github.com/nteract/desktop/commit/c8d3a0ab9e995921810bbbec9e738c35020ae1ad))
- fix cross-lock ordering and expand tokio mutex lint to all sources (#1638) *(runtimed)*([1e6ba53](https://github.com/nteract/desktop/commit/1e6ba534da1bc51027d67cfe6685f499ca55f1d0))
- burn down mutex-across-await violations (58 → 19) (#1642) *(runtimed)*([f24875a](https://github.com/nteract/desktop/commit/f24875a7bcfb687cbb075ca4cd2f2f0b0116ff8e))
- fall back to room.working_dir in LaunchKernel handler (#1648) *(runtimed)*([215aeb4](https://github.com/nteract/desktop/commit/215aeb4843afd185094103b3b7c95ca08ff8b9c5))
- zero mutex-across-await violations, gate all files in CI (#1649) *(runtimed)*([44934fe](https://github.com/nteract/desktop/commit/44934fed5f0ecd53555c96635360ef9426aadbc5))
- persist trust for untitled notebooks across daemon restarts (#1654) *(runtimed)*([2a90133](https://github.com/nteract/desktop/commit/2a90133ecefd197bb58d23c4fc56561df02e45ed))
- mark in-flight executions as failed on kernel restart/death (#1652) (#1655) *(runtimed)*([bb4b3ea](https://github.com/nteract/desktop/commit/bb4b3ea70197929a61ef995df81654651eefb769))

### Features

- replace vanilla DOM renderer with React + renderer plugins (#1615) *(mcp-app)*([1324f23](https://github.com/nteract/desktop/commit/1324f23a593e0b89874d601eed08792f1ff91c94))
- add async-rust-lsp plugin for tokio mutex diagnostics (#1620) *(plugins)*([4476318](https://github.com/nteract/desktop/commit/4476318d754b4d1ae0c7625dacc1a869e1fa2ce7))
- reuse pool envs for inline deps instead of rebuilding (#1622) *(runtimed)*([d1c60d6](https://github.com/nteract/desktop/commit/d1c60d6c5c13e44477f738717e8b6ea7eecb56e1))
- daemon-served renderer plugins for plotly, vega, leaflet (#1619) *(mcp-app)*([ccda0c2](https://github.com/nteract/desktop/commit/ccda0c25e3792932d148e54b086af1eb9407b467))
- move markdown+KaTeX to daemon-served plugin (#1625) *(mcp-app)*([d69ec66](https://github.com/nteract/desktop/commit/d69ec664a57e919e30c6a5c776c933fba3480acc))
- ship resilient mcpb-runt binary in MCPB bundle (#1629) *(mcp)*([956c988](https://github.com/nteract/desktop/commit/956c98811b693199e52fe4e4cdca481a3f932d0c))
- project-aware dependency management — pixi add / uv add (#1650) *(runtimed)*([f913da1](https://github.com/nteract/desktop/commit/f913da1f26d605977bc8c04bd8b4a1402090397c))
- show pixi.toml dependency names in header (#1653) *(frontend)*([924d6cb](https://github.com/nteract/desktop/commit/924d6cb542984ea8d566cf3eab530b696bb54011))

### Performance

- shrink widget bundle from 1.5 MB to 539 KB (#1628) *(mcp-app)*([50f8de5](https://github.com/nteract/desktop/commit/50f8de50fef3e7d775b0628f4eb1220784f11fad))

### 2.1.2 — April 7, 2026
### Bug Fixes

- replace_match context matching + create_notebook dep sync (#1589) *(runt-mcp)*([f8b2571](https://github.com/nteract/desktop/commit/f8b25714bd773289f514243e1a02b3bfcd57b788))
- Plotly 6 bdata decoding, GeoJSON text parsing, structured viz synthesis (#1595) *(repr-llm)*([b70b0a1](https://github.com/nteract/desktop/commit/b70b0a1ea1b215aa1c3511631952ba1afbe29a85))
- create_notebook(package_manager='pixi') now persists correctly (#1599) *(runt-mcp)*([3f8669b](https://github.com/nteract/desktop/commit/3f8669bc4f9a7849eff8a4eb96629ef3f95373ad))
- show 'awaiting approval' instead of 'initializing' when blocked on trust (#1601) (#1603) *(runtimed)*([c084dd6](https://github.com/nteract/desktop/commit/c084dd60b09b390a8bbafd09ff417a3fa4c019b1))
- show trust banner and handle execution for awaiting_trust status (#1604) *(frontend)*([27c7cef](https://github.com/nteract/desktop/commit/27c7cef8307b4f87230e0bb6014959fa3c129488))
- route conda/pixi notebooks to correct kernel pool (#1605) (#1606) *(runt-mcp)*([f3c4860](https://github.com/nteract/desktop/commit/f3c486080fb851c5a61ce29d3b03b3e9ea0ba77a))
- critical imports must fail the script, normalize dep specs (#1609) *(prewarm)*([e0ba355](https://github.com/nteract/desktop/commit/e0ba3556f392308befdc35a4a8e9cbec35d5d8f9))

### Documentation

- fix stale references and missing entries across documentation (#1590)([273fe68](https://github.com/nteract/desktop/commit/273fe68756122995dc5faa1a9e0349d9ab65c039))

### Features

- add config subcommand + fix stale sole-writer comment (#1600) *(runt)*([23d795c](https://github.com/nteract/desktop/commit/23d795ceb2c5c68996197cfeffae29f2fc176bec))
- replace inline warmup scripts with embedded prewarm package (#1608) *(prewarm)*([4d81e72](https://github.com/nteract/desktop/commit/4d81e72abcc3cb8d829de70ec70e121e928c7daf))
- add known package-to-import-name mapping (#1610) *(prewarm)*([8d9f3c4](https://github.com/nteract/desktop/commit/8d9f3c46293c9fe9c8eed0a754ce8acb72480d09))

### 2.1.1 — April 7, 2026
### Bug Fixes

- wait for pool warming on cold start instead of failing immediately (#1579) *(runtimed)*([4edfb95](https://github.com/nteract/desktop/commit/4edfb9546359276df81e5649a4c16f33c6d6118a))
- don't restart child on transient errors, auto-rejoin sessions (#1578) *(mcp-supervisor)*([3910028](https://github.com/nteract/desktop/commit/3910028c2febeeaf798064bf0f7d96246310e2a9))
- retain warm bases and prewarm user defaults (#1581) *(runtimed)*([4d550fb](https://github.com/nteract/desktop/commit/4d550fb640d66929b409ce6b92ac0cd37c7ddb94))
- eliminate double-bootout race during nightly upgrade (#1582) *(runtimed)*([8927f96](https://github.com/nteract/desktop/commit/8927f96a90ed07ef77cc6169c65d7e9efe7390c1))
- harden prewarm import generation (#1584) *(runtimed)*([fc8a30d](https://github.com/nteract/desktop/commit/fc8a30d7cc70e8d24a03af36febfdf8cdbd34b98))
- update RuntimeStateDoc on interrupt to clear CRDT queue (#1585) *(runtimed)*([3c17e7a](https://github.com/nteract/desktop/commit/3c17e7ad9e4d997fcf0ef12a891afdeec1f20aa5))

### Features

- add mcp-inspector command for MCP Apps testing (#1575) *(xtask)*([eebead4](https://github.com/nteract/desktop/commit/eebead42f0e03dd582e3ca04410373d7a82a6b3d))
- ContentRef resolution + direct CRDT→WidgetStore projection (#1576) *(widgets)*([119dbc2](https://github.com/nteract/desktop/commit/119dbc2f8de899450af2ae1b69563dd35ae20b6b))
- debounced CRDT writes + jslink echo suppression (#1580) *(widgets)*([4da6411](https://github.com/nteract/desktop/commit/4da6411611cbcb13cc1ce73bbc7064f6f0a6cef0))

### 2.1.0 — April 6, 2026
### .github/workflows

- Migrate workflows to Blacksmith runners (#1353)([4a04920](https://github.com/nteract/desktop/commit/4a04920a852881c1b02b17e074ad0e6e3cd39b72))

### Bug Fixes

- clarify replace_regex tool description semantics (#1348) *(runt-mcp)*([6655945](https://github.com/nteract/desktop/commit/66559451588f4ea37c2cc0565013782d214444fa))
- wrap cell-ui-state store setters in useLayoutEffect (#1351) *(notebook)*([42026b5](https://github.com/nteract/desktop/commit/42026b5fe514f580cf857d4e1069574425e2045f))
- disable incremental compilation with sccache and bump cache size (#1355) *(xtask)*([7e83201](https://github.com/nteract/desktop/commit/7e8320154c9d49f9d0f898521cc6ddd4d98c8642))
- fix output disappearing on structural changes and WASM diff snapshot (#1357) *(sync)*([edc17c6](https://github.com/nteract/desktop/commit/edc17c607aeed7d07613cf07eb0cbbd97de24718))
- poll RuntimeStateDoc for execution completion, remove --legacy (#1359) *(runt-mcp)*([e19b750](https://github.com/nteract/desktop/commit/e19b750fa854aad40996c4fe1b60d6ff1f19fa68))
- fire-and-forget for SendComm widget state updates (#1366) *(sync)*([4fde22a](https://github.com/nteract/desktop/commit/4fde22abb2d476f3b48664a9ffe9fce36db81fe9))
- remove flaky bloom filter assertion in Bug #1067 test (#1367) *(wasm-tests)*([dc7378a](https://github.com/nteract/desktop/commit/dc7378a7f8cf4e7e8399bbe6e9425e9bb917f4ed))
- configure ty extra-paths for src-layout workspace members (#1370) *(ci)*([74338f2](https://github.com/nteract/desktop/commit/74338f25d9a0dae407f1eae5028df77db57cfd4b))
- rebuild stale WASM bindings and stabilize flaky tests (#1374) *(ci)*([3e06398](https://github.com/nteract/desktop/commit/3e06398829c04e34ccac660a2243059edd55c2eb))
- mark flaky uv inline dep tests as xfail (#1375) *(ci)*([c5a7202](https://github.com/nteract/desktop/commit/c5a7202c5b3af68f14cf2bcc14d9bb1e5ed6c54d))
- make cell-ui-state store StrictMode-safe (#1380) *(notebook)*([9ee7e7a](https://github.com/nteract/desktop/commit/9ee7e7a298e1cbebdb5d1cb9494e711b014b10b5))
- add build.rs stub for runt-mcp _output.html in fresh worktrees (#1387) *(build)*([99b6366](https://github.com/nteract/desktop/commit/99b63666490911b2f01bb05186a9f7922599f892))
- refuse placeholder _output.html in release builds (#1388) *(build)*([297eb99](https://github.com/nteract/desktop/commit/297eb992610cc03ab018fb357aa4d51f13044b18))
- graceful room migration on re-key collision (#1396) *(sync)*([8a66de9](https://github.com/nteract/desktop/commit/8a66de9ba27b26e3a2958a2733badc5b22042864))
- address codex review — drop unsafe kernel migration, signal merged doc (#1398) *(sync)*([d37b865](https://github.com/nteract/desktop/commit/d37b865e341eb52852fdb54ade817028ca032082))
- stamp runtimed version and re-install CLI on upgrade (#1395) *(release)*([f4c9a60](https://github.com/nteract/desktop/commit/f4c9a60921e4ba59f961e92bb3bc1cde8eba1c2b))
- expand known packages list to prevent false typosquat warnings (#1397) *(trust)*([6e3c1ea](https://github.com/nteract/desktop/commit/6e3c1ea789a8211cc518cf095854857c75ee74ac))
- drain stale response frames after relay timeout (#1399) *(sync)*([5511665](https://github.com/nteract/desktop/commit/5511665ccf88fc9e489a64f80aae3f7f94dffff9))
- run pnpm install in cmd_build before frontend build (#1410) *(xtask)*([3d5b3a1](https://github.com/nteract/desktop/commit/3d5b3a1de7ee7e847e45a881aaebf5b4a52d624e))
- render Output widget captured outputs via CRDT state (#1412) *(widgets)*([2b36f94](https://github.com/nteract/desktop/commit/2b36f9428743268c267632035c7e7c8b466bc7d6))
- ensure RuntimeStateDoc sync before reading cell outputs (#1415) *(mcp)*([3c8009e](https://github.com/nteract/desktop/commit/3c8009e44063bf30440f453e82acac7afa5f4229))
- use ReplaySubject so initial sync retry timer always arms (#1421) *(sync)*([50d42c1](https://github.com/nteract/desktop/commit/50d42c169a6011eadd1a55de5a9265d0857d003b))
- buffer relay frames until frontend signals readiness (#1422) *(sync)*([8c0f17a](https://github.com/nteract/desktop/commit/8c0f17af61bc06c877dfe4207d64b31c70def96b))
- use .write().await instead of .blocking_write() in SetAgentMode handler (#1425)([42ce039](https://github.com/nteract/desktop/commit/42ce039182a8401dc4b803421e4f102f57e0cfaf))
- drop redundant broadcasts at peer relay point (#1424) *(sync)*([081d000](https://github.com/nteract/desktop/commit/081d0008a1c160f73d3d2b20405898f421111d94))
- add agent_mode to SyncedSettings in notebook crate — fixes nightly build (#1426)([472a0fc](https://github.com/nteract/desktop/commit/472a0fcaa3163808568bf452fb86770255934d20))
- install CLI to ~/.local/bin instead of /usr/local/bin (#1437) *(notebook)*([8584ac7](https://github.com/nteract/desktop/commit/8584ac7483a38bed4d4991066c434fed58c01611))
- clear text selection when focus leaves iframe (#1446) *(iframe)*([685e3d3](https://github.com/nteract/desktop/commit/685e3d368446de18ab22e2ffa87d56c869541b6f))
- update all outputs matching display_id (#1447) *(runtimed)*([bde5231](https://github.com/nteract/desktop/commit/bde523118bab2d0441c2922a1795d93decfdfcbc))
- consolidate cell scroll into focusCell, remove fragile ref (#1448) *(notebook)*([97342ca](https://github.com/nteract/desktop/commit/97342ca9cdb2ff915cbe73e3d16aac764954b3c0))
- add retry for flaky wasm-integration tests (#1450) *(test)*([9a224e3](https://github.com/nteract/desktop/commit/9a224e3de680bdc6f0d1eac5b3655b4e4eead559))
- use named pipe path for Windows integration tests (#1455) *(test)*([a82e66d](https://github.com/nteract/desktop/commit/a82e66d1f2809f519ddfa5d3ad6a12a6a47bec04))
- add content hashes to Vite output filenames (#1456) *(notebook)*([1c01eca](https://github.com/nteract/desktop/commit/1c01ecaee7550c3aafb80ef15561dd66383ba2d7))
- restore env sync for agent mode (#1452) (#1459) *(runtimed)*([f63f6ad](https://github.com/nteract/desktop/commit/f63f6ad96cad186ebcb4ec49f54e6af0d55b897e))
- strip sourcemap comments from raw library imports (#1468) *(iframe)*([afbf611](https://github.com/nteract/desktop/commit/afbf61150f4bc5253f556a3722f04eadde4c0c27))
- prevent scroll jump during widget slider interaction (#1485) *(frontend)*([c384ae9](https://github.com/nteract/desktop/commit/c384ae9cca7fe84257d0764b151cfb7d2271090e))
- reduce output size for audio, viz, and large MIME types (#1488) *(mcp)*([48961e2](https://github.com/nteract/desktop/commit/48961e264b674d35e2fcf06d3d279290bdc0ddb7))
- force CodeMirror repaint on window reactivation (#1490) *(frontend)*([bb710c8](https://github.com/nteract/desktop/commit/bb710c8704cc34a92e5f7bce3133f5875b0ca463))
- add error handling and switch to canvas renderer (#1491) *(vega)*([b398dc6](https://github.com/nteract/desktop/commit/b398dc6904aea706413ab622a574295673bfee6a))
- report execution status and non-text outputs to agents (#1495) *(mcp)*([18fdd6f](https://github.com/nteract/desktop/commit/18fdd6ff3d37f00fa850dff286cc3eebe1f8251f))
- allow HTTPS stylesheets in output iframe CSP (#1496) *(security)*([2db0626](https://github.com/nteract/desktop/commit/2db06260544d632f2e76a9cdc759ab6e09020df7))
- generate proper changelog for stable releases (#1499) *(ci)*([a28e439](https://github.com/nteract/desktop/commit/a28e439e1b80398ad36fc4eb51ad88e8c858f76b))
- group stable changelog entries by ignoring nightly tags (#1500) *(ci)*([a5d399c](https://github.com/nteract/desktop/commit/a5d399cb657382865b0128c9e0833ad5e69d6df6))
- resolve widget loading race on notebook open (#1501) *(frontend)*([7dfcb9f](https://github.com/nteract/desktop/commit/7dfcb9fb44a4b9ff3fb3afedd4afc00a7f3620e8))
- prevent bootstrap skeleton from shadowing daemon metadata (#1498) *(crdt)*([542141f](https://github.com/nteract/desktop/commit/542141f65596c651233014bb112a57a3f46857ad))
- mark execution error in agent CellError handler (#1502) *(runtimed)*([2d47be0](https://github.com/nteract/desktop/commit/2d47be0b76e91772a1c9ee2f3a9bb4fb98dee581))
- read execution_count from RuntimeStateDoc instead of stale NotebookDoc (#1503) *(mcp)*([dcf0e49](https://github.com/nteract/desktop/commit/dcf0e49ec3e3a190479799c362cc9f584ef2f4b6))
- resolve execution_count from RuntimeState instead of stale NotebookDoc (#1511) *(frontend)*([61fd9c4](https://github.com/nteract/desktop/commit/61fd9c403da12ebb4b9332a39d4292a7ea515e5b))
- replace animate-pulse with squish-breathe on stop indicator (#1512) *(frontend)*([6d1687d](https://github.com/nteract/desktop/commit/6d1687ddfb1d3269dfd403c0be26f27a54297ba6))
- remove "Isolated output frame" tooltip from output iframes (#1532) *(ui)*([4ac8d6b](https://github.com/nteract/desktop/commit/4ac8d6b6f20c371e48b816f679c1c81eea5686fe))
- stabilize flaky queue dedup and output sync tests (#1520) *(sync)*([d574206](https://github.com/nteract/desktop/commit/d574206b2d259826324b319c5e467c6393d3af87))
- pass requested runtime to auto_launch_kernel for CreateNotebook (#1535) *(daemon)*([429d54a](https://github.com/nteract/desktop/commit/429d54a2827549ec05ee7b06d9b21afebdb65678))
- show Pixi pool in daemon status output (#1536) *(cli)*([69db083](https://github.com/nteract/desktop/commit/69db083691e482c68b70287f161360fe1280b71e))
- fix dependency pipeline for all env types (uv, conda, pixi) (#1538) *(mcp)*([d1f4451](https://github.com/nteract/desktop/commit/d1f4451cac147395f49ebddd270e0578e80ca0d3))
- use scoped auto-detect with full pixi support on restart (#1541) *(mcp,daemon)*([e6c6e36](https://github.com/nteract/desktop/commit/e6c6e36bd6fd718d29ea9ab825631dbfc1a70b8e))
- run_all_cells waits for completion with timeout (#1546) *(mcp)*([4693113](https://github.com/nteract/desktop/commit/4693113dfaed96e2f1721e6acc580e80f9b93b1d))
- avoid unnecessary reconnect loop on daemon PID change (#1545) *(mcp)*([8565667](https://github.com/nteract/desktop/commit/85656673b135319be8ec5fee9e191ccd6e6b6e49))
- include cell tags in get_cell and get_all_cells rich responses (#1548) *(mcp)*([d1c646d](https://github.com/nteract/desktop/commit/d1c646db72c3e78755661789ff90d2993997d35e))
- prevent spurious ANSI reset after emoji in stream output (#1549) *(daemon)*([a6d8801](https://github.com/nteract/desktop/commit/a6d8801612e0ced1b5c64780b5664ceb3e6f5710))
- process RuntimeStateSync frames during request/response wait (#1553) *(sync)*([abf6405](https://github.com/nteract/desktop/commit/abf6405265748291fd9e48f9b1da07bccbd89952))
- resolve blob port before reading cells, add binary MIME fallback (#1565)([a7af987](https://github.com/nteract/desktop/commit/a7af98781eea2334c733a5aa005f373e2f7148bc))
- invalidate all plugin virtual modules on HMR rebuild (#1567) *(frontend)*([ac719da](https://github.com/nteract/desktop/commit/ac719da8e89adb5386996201457f09322579cb83))
- blob-store large comm state values to prevent 58s CRDT writes (#1571) *(daemon)*([4771625](https://github.com/nteract/desktop/commit/4771625fd31f75b7395f2fd4fb58767a55a26766))
- anywidget ESM rendering — correct MIME types and iframe CSP (#1572)([333395d](https://github.com/nteract/desktop/commit/333395d4c8fd26988ddf92a47e8943a63868b5b5))

### Documentation

- simplify env -i commands to use absolute paths instead of PATH (#1400)([e533b77](https://github.com/nteract/desktop/commit/e533b772e1460fd52389bbbdb1b98f6737c6b31a))
- use tar -O instead of extracting to /tmp (#1403) *(diagnostics)*([88d52ef](https://github.com/nteract/desktop/commit/88d52ef2726175b61d8bcb0defccd154a98cfd3f))
- update architecture docs for agent subprocess execution (#1440)([8ba988e](https://github.com/nteract/desktop/commit/8ba988e72dc554368be68de97281feef9180ba0a))
- sync AGENTS.md and README.md with current workspace structure (#1476)([7517d41](https://github.com/nteract/desktop/commit/7517d412c36fcb14ba3f87412c08e629f732a3fd))
- guide agents to use MCP tools for notebook dependencies (#1506)([f78c0b9](https://github.com/nteract/desktop/commit/f78c0b961867ed00d4e039a3629fcadc4b580bed))
- clarify single-session scoping in tool descriptions (#1544) *(mcp)*([1d97189](https://github.com/nteract/desktop/commit/1d97189721fe8acd967bb61369f54fe2611ec826))
- update agent and contributing docs for recent architecture changes (#1573)([f678732](https://github.com/nteract/desktop/commit/f678732360bec51debaac34dd6133728dd226000))
- document iframe Content Security Policy (#1574)([5412964](https://github.com/nteract/desktop/commit/541296441759e9f99f216ce7d1b74299d70fd690))

### Features

- move cell outputs to RuntimeStateDoc keyed by execution_id (#1343) *(sync)*([363f32d](https://github.com/nteract/desktop/commit/363f32dfc5db2996e8cf80802d3a1eb24f157a0a))
- support plotly's application/vnd.plotly.v1+json MIME type (#1352) *(outputs)*([9c26c47](https://github.com/nteract/desktop/commit/9c26c471d59f5caa6b000ee2e78f01b951e6687b))
- dual-write comm state to RuntimeStateDoc (#761 Phase A) (#1356) *(sync)*([1025c66](https://github.com/nteract/desktop/commit/1025c661e12f4b980b27d51055e2173ffb5e80df))
- support Vega and Vega-Lite MIME types (#1358) *(outputs)*([d66e3f0](https://github.com/nteract/desktop/commit/d66e3f0454e779d07617c10439ff9bb17a932062))
- #761 Phase B — drive WidgetStore from RuntimeStateDoc comms (#1362) *(sync)*([68abbd9](https://github.com/nteract/desktop/commit/68abbd949b526474b9ad309cd8a7dc5654f8cd67))
- #761 Phase D — native CRDT widget state (#1368) *(sync)*([3a4a557](https://github.com/nteract/desktop/commit/3a4a5573cbc2de16c58cc63fbed0a91616a1f07f))
- widget binary buffers via blob store (#1371) *(sync)*([338468e](https://github.com/nteract/desktop/commit/338468e3b40fac0ca22cb593db60a50b33ed7859))
- surface prewarmed packages in RuntimeStateDoc and MCP tools (#1373) *(env)*([606db7b](https://github.com/nteract/desktop/commit/606db7bb3122bd8f52d8448c46d0e558dfa27283))
- Output widget captures to CRDT + broadcast cleanup (#1372) (#1379) *(sync)*([e766301](https://github.com/nteract/desktop/commit/e7663016ec712f0bdaa4069dc9f83ba1bd27f3d7))
- add GeoJSON renderer with Leaflet (#1386) *(output)*([a6f504e](https://github.com/nteract/desktop/commit/a6f504e670699d56696e53a8c5c637749b5bb39b))
- add text/latex MIME type renderer with KaTeX (#1392) *(output)*([23d2e0e](https://github.com/nteract/desktop/commit/23d2e0e6d616225fad4d7f654be1befcf46ccada))
- support bulk clear_outputs with optional cell_ids (#1402) *(mcp)*([90ccd86](https://github.com/nteract/desktop/commit/90ccd86e334bd422dd590ff05ad96654b15b715c))
- add runtime agent wire types (#1333) (#1404) *(protocol)*([06b02ac](https://github.com/nteract/desktop/commit/06b02ac653fb685e16982a899e37c794ff7cb98c))
- allow show_notebook on untitled/ephemeral notebooks (#1414) *(mcp)*([2c58430](https://github.com/nteract/desktop/commit/2c58430ac671948710e87e26fb9ce664848ea991))
- runtime agent module — sync-only subprocess main loop (#1411) *(runtimed)*([105f2a9](https://github.com/nteract/desktop/commit/105f2a9ec12506cb666a9c8ca2bd84daf97c9275))
- add audio, video, PDF, JS renderers and invert isolation model (#1417) *(outputs)*([e870ade](https://github.com/nteract/desktop/commit/e870adedb7912e4eb95cb1a634363fd8b57c272f))
- process-isolated runtime agents (#1333) *(runtimed)*([c15c4a9](https://github.com/nteract/desktop/commit/c15c4a95c0ccd2d3ad93f067e5833b2cbf6d08ba))
- persist agent_mode in settings doc — survives daemon restarts (#1423)([10bebde](https://github.com/nteract/desktop/commit/10bebde3f9ba3cf561221edbc9635ee609f71480))
- add --socket flag to `runt mcp` for explicit daemon socket path (#1427) *(runt)*([862659f](https://github.com/nteract/desktop/commit/862659f2d8ba376e271e561f669cba0ca972f65e))
- add collapsible Feature Flags section with agent mode toggle (#1429) *(settings)*([9f55f75](https://github.com/nteract/desktop/commit/9f55f754eb6eeeac64c8fa3edf303eabec97ddc8))
- serve cached tools optimistically on startup (#1430) *(mcp-supervisor)*([7568261](https://github.com/nteract/desktop/commit/756826104ac8b2e069b40d17d5a48b4ed560935a))
- agent as Unix socket peer with CRDT-driven execution (#1431) *(runtimed)*([fb2e470](https://github.com/nteract/desktop/commit/fb2e470bb59f59b002ace56b7993930e835615fe))
- make agent mode unconditional (#1433) *(runtimed)*([5daf58d](https://github.com/nteract/desktop/commit/5daf58df0d5ffd9b844cc1862ed7270b10d16e53))
- focus cell on iframe click and broadcast focus presence (#1444) *(notebook)*([5d4e9e9](https://github.com/nteract/desktop/commit/5d4e9e91e7f13e77a1bc1a97691dd2bbbe710111))
- agent-internal kernel restart + provenance (#1436 Phase B) (#1449) *(runtimed)*([e623bf5](https://github.com/nteract/desktop/commit/e623bf54d012912e31959cb3f9c2ada98b5e1421))
- pre-install nbformat in all Python runtimes (#1458) *(kernel-env)*([802ceb7](https://github.com/nteract/desktop/commit/802ceb7250ec1d0fa851bb35afe238c144486322))
- synthesize text/llm+plain for viz outputs (#1461) *(repr-llm)*([6560b3c](https://github.com/nteract/desktop/commit/6560b3cd33bf3713803f6b04a84d52ea07c49ee3))
- first-class pixi kernel support via pixi run (#1462) (#1465) *(runtimed)*([29bb485](https://github.com/nteract/desktop/commit/29bb485447169163d74b83c7ba5eaaab2d9f4175))
- synthesize text/llm+plain for SVG, HTML, and large JSON (#1466) *(repr-llm)*([2ebd37b](https://github.com/nteract/desktop/commit/2ebd37be2c1a4f6e1bfa103e7af3ff9b693892ae))
- dedicated dependency panel, ipykernel pre-check, fix routing (#1469) *(pixi)*([8d15121](https://github.com/nteract/desktop/commit/8d15121c58764662d6e3b7696929b36e1d8abb4c))
- pixi as available default Python environment (#1474) *(pixi)*([e46d326](https://github.com/nteract/desktop/commit/e46d326d2cb02d81189d5c6c7376a81469b8b03f))
- finish sweep — [tool.pixi] detection, drift, inline deps UI (#1477) *(pixi)*([9f34a55](https://github.com/nteract/desktop/commit/9f34a558608c2f4fb6e302b035e81ac303a2cddc))
- pixi JSON APIs — shell-hook launch, pinned version, pixi info (#1470, #1471) (#1479) *(pixi)*([4423ac9](https://github.com/nteract/desktop/commit/4423ac97b844b840145c4a0d51a01b9174f6112b))
- route built-in widget updates through CRDT instead of SendComm (#1480) *(widgets)*([22e5a01](https://github.com/nteract/desktop/commit/22e5a01f24a24865497f0c8016dfe8e11f13ad60))
- synthesize text/llm+plain for widget outputs (#1482) *(output-resolver)*([ba9de73](https://github.com/nteract/desktop/commit/ba9de73f77161288493f228e1059d2c22142bebb))
- PEP 723 support, default packages in settings, version pin fix (#1483) *(pixi)*([15c1ffa](https://github.com/nteract/desktop/commit/15c1ffaaa17b372967b595ea880025816326b3e7))
- highlight Restart+Run All button when deps are out of sync (#1487) *(frontend)*([240d6fb](https://github.com/nteract/desktop/commit/240d6fb519ab8081c0680180608f26c866d456bd))
- real pixi pool warming with managed pixi.toml envs (#1486) *(pixi)*([bba3c3c](https://github.com/nteract/desktop/commit/bba3c3cb98c9acf90c209cf60356956cfcdc0979))
- library-based pixi pool warming with rattler (#1509) *(daemon)*([7848d60](https://github.com/nteract/desktop/commit/7848d601d3a6db7146933595737b46335e8272b7))
- add version info to pool Pong and check on connect (#1515) *(protocol)*([0aade7e](https://github.com/nteract/desktop/commit/0aade7e3628b55e595662d236835d6fc458871f0))
- add symlink currency check on app launch (#1514) *(cli)*([2783f56](https://github.com/nteract/desktop/commit/2783f5699c594361318c250cedde2a48a49f89c3))
- migrate daemon registration to SMAppService on macOS 13+ (#1516) *(service)*([2213aae](https://github.com/nteract/desktop/commit/2213aae0eb800322ad57f0fa131253e06953783a))
- add system-wide CLI installation via menu (#1513) *(cli)*([545d151](https://github.com/nteract/desktop/commit/545d151d0273bd238e3d512e010346400b49c3da))
- extract markdown into on-demand renderer plugin (#1519) *(isolated-renderer)*([24e2a46](https://github.com/nteract/desktop/commit/24e2a46f8146e42559eac00d015769a6424ee1a3))
- migrate vega to renderer plugin API (#1521) *(isolated-renderer)*([5d91761](https://github.com/nteract/desktop/commit/5d917615d218cc898b44bd0e1b6b5acffbc699f9))
- migrate plotly to renderer plugin API (#1534) *(isolated-renderer)*([fd59aaf](https://github.com/nteract/desktop/commit/fd59aafff9622565b759358bd6ec6ed89c8e1cb7))
- migrate leaflet to plugin API, document system (#1537) *(isolated-renderer)*([45ae032](https://github.com/nteract/desktop/commit/45ae0328bfa39ada1df60c3016f2f95db7336757))
- support ~ and relative paths in save_notebook, open_notebook, create_notebook (#1540) *(mcp)*([02969ca](https://github.com/nteract/desktop/commit/02969ca4330c9d0c3b92e7d91dcbffa7a5cd7494))
- pre-compute renderer plugins at materialization, fix output widgets (#1539)([f86e672](https://github.com/nteract/desktop/commit/f86e67241080c7475f26f39b9a3680157a7b06e5))
- add per-session file logging for runt mcp (#1554) *(mcp)*([727fe4c](https://github.com/nteract/desktop/commit/727fe4cfb7115b87c414e1545a2d8370846fa122))
- add GeoJSON summarizer for text/llm+plain synthesis (#1555) *(repr-llm)*([d56f5b6](https://github.com/nteract/desktop/commit/d56f5b6f413512d23bf31251f93f7e38ff7c8e7f))
- selective manifest resolution — only fetch what the LLM needs (#1561) *(mcp)*([48581e5](https://github.com/nteract/desktop/commit/48581e58481c973314f1bf69bb64978cc9776aae))
- selective MIME resolution via priority list (#1562) *(wasm)*([3d61f31](https://github.com/nteract/desktop/commit/3d61f313ee274e5318815d4b8a0b3871047b0bb4))
- resolve ContentRefs to Inline/Url/Blob variants (#1564) *(wasm)*([9be5ecf](https://github.com/nteract/desktop/commit/9be5ecf853e0717e09e865bc997fa7943104fc4b))
- text/latex renderer via iframe plugin (#1566) *(frontend)*([ca719cf](https://github.com/nteract/desktop/commit/ca719cf5167a61370eefe1cd415558fe8d0d7f39))
- synthesis before priority walk for richer LLM output (#1570) *(mcp)*([ec736df](https://github.com/nteract/desktop/commit/ec736df122af6893ed6a86c5b4ef27c6b1df769b))

### Performance

- decouple output-widget from iframe-libraries (-69% IIFE size) (#1389) *(build)*([421ebcd](https://github.com/nteract/desktop/commit/421ebcd233415141c288dc8910f5309801a01a72))
- skip unchanged MCP widget rebuild and parallelize pnpm install (#1432) *(xtask)*([33a688d](https://github.com/nteract/desktop/commit/33a688de0943716ba0f9f51b9c939932e26f2459))
- smooth widget rendering with batch updates and image preloading (#1478) *(iframe)*([3567e5e](https://github.com/nteract/desktop/commit/3567e5e1e49b4cf2415d38ec8425afefe12edac9))
- always minify renderer plugin builds (#1543) *(isolated-renderer)*([35505eb](https://github.com/nteract/desktop/commit/35505eb3753f2a8b8918ed3963846716c679e469))

## Frequency / raw counts
- total bullets across the series: 70 features, 93 fixes, 5 performance, 9 documentation, 1 other

---

# GRAND TOTAL across all 6 entries
- 298 features, 628 fixes, 39 performance, 105 documentation, 2 other
