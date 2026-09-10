# Changelog

## [1.0.0](https://github.com/anh1c/at-scd/compare/plugins@v0.1.3...plugins@v1.0.0) (2026-09-10)


### ⚠ BREAKING CHANGES

* Edit API v1 validation is no longer supported (e.g. edit api v1 checked if an elements id was unique in the document)

### ✨ Features

* (plugins): validate duplicate IPs in ConnectedAP edit wizard ([24366f2](https://github.com/anh1c/at-scd/commit/24366f29084eddfcffd900eb1999b574f1564a42))
* add AT SCD IED workspace ([a7149e3](https://github.com/anh1c/at-scd/commit/a7149e39a8bf16af10598ab7da96092e3da8e105))
* add elements to virtual ied ([#1714](https://github.com/anh1c/at-scd/issues/1714)) ([0c1074b](https://github.com/anh1c/at-scd/commit/0c1074bf9d4f154a06c8031e593974c1f618fead))
* add missing editor icons ([#1495](https://github.com/anh1c/at-scd/issues/1495)) ([d404464](https://github.com/anh1c/at-scd/commit/d404464444a0f03fbe0ca3d0774e1cc1bc704e38))
* Add oscd api with plugin state ([#1696](https://github.com/anh1c/at-scd/issues/1696)) ([1c457cf](https://github.com/anh1c/at-scd/commit/1c457cf02a404a61b7ff09553223091bc5edd1f6))
* add subscriber later binding plugin ([#1664](https://github.com/anh1c/at-scd/issues/1664)) ([26f6900](https://github.com/anh1c/at-scd/commit/26f690007cb5e7fe42b22f7fc46f18035d934008))
* add virtual ied ([#1712](https://github.com/anh1c/at-scd/issues/1712)) ([cf45fe9](https://github.com/anh1c/at-scd/commit/cf45fe92e4a09066ca9b426b282486229dfbc43a))
* Added XML Package for OpenSCD ([#1536](https://github.com/anh1c/at-scd/issues/1536)) ([ca60c2a](https://github.com/anh1c/at-scd/commit/ca60c2a63c304a5e1c88095ea2f24b597fc5a2ad))
* Allow .fsd file creation ([d9a4a0c](https://github.com/anh1c/at-scd/commit/d9a4a0c6f6a0c9c86927d80bf5c81b4e9f6fc6d5))
* **communication:** validate duplicate IPs in ConnectedAP within the same SubNetwork ([568c944](https://github.com/anh1c/at-scd/commit/568c9442d9b4f6ab754805d6e770b67f5305c436))
* edit and delete virtual IED elements ([#1715](https://github.com/anh1c/at-scd/issues/1715)) ([106688b](https://github.com/anh1c/at-scd/commit/106688bd736b449a3182045ecb6fccc5a51067c7))
* Edit events v1 will be converted event v2 ([14e933e](https://github.com/anh1c/at-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* make use of lerna nx ([#1462](https://github.com/anh1c/at-scd/issues/1462)) ([94d68d7](https://github.com/anh1c/at-scd/commit/94d68d7e395b545c699ead584266231085cffeac))
* move gse smv between connectedAPs ([#1680](https://github.com/anh1c/at-scd/issues/1680)) ([da8324e](https://github.com/anh1c/at-scd/commit/da8324e08483a3b45dc7436d7c2e22381fa3c9e8))
* remove communication from the substation editor and use oscd-publisher plugin ([#1650](https://github.com/anh1c/at-scd/issues/1650)) ([c850088](https://github.com/anh1c/at-scd/commit/c8500880bfdffd87cf014a5ad1d9fcef89a5ba41))
* Support edit api v2 ([#1581](https://github.com/anh1c/at-scd/issues/1581)) ([14e933e](https://github.com/anh1c/at-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* update nsd files ([#1691](https://github.com/anh1c/at-scd/issues/1691)) ([c437f5a](https://github.com/anh1c/at-scd/commit/c437f5acaf5a45032cfae559ecf70de968913d45))


### 🐞 Bug Fixes

* 1553 LN LN0 wizards read only attributes ([#1568](https://github.com/anh1c/at-scd/issues/1568)) ([87aa759](https://github.com/anh1c/at-scd/commit/87aa75961c7ef0bfe11810d2fa5d4e08704da033)), closes [#1553](https://github.com/anh1c/at-scd/issues/1553)
* Add export for substation plugin ([75ea35f](https://github.com/anh1c/at-scd/commit/75ea35f3df927211f5fbf6c90d09d43c4aebb5c9))
* change lnode rendering ([dc93cab](https://github.com/anh1c/at-scd/commit/dc93cab47353b847f64c8697719def3aec4d2218))
* change lnode rendering ([68d74f1](https://github.com/anh1c/at-scd/commit/68d74f1778820cb22b95435c1b4b8cbe627cce8f))
* change pattern definition of tIDNaming to non-whitespace characters ([#1670](https://github.com/anh1c/at-scd/issues/1670)) ([5476bd0](https://github.com/anh1c/at-scd/commit/5476bd08711ae94341802db0636dcfd0e231cd41))
* change release please config ([16d553c](https://github.com/anh1c/at-scd/commit/16d553ccc4dd4154d1c643d444951822724d990e))
* **communication-plugin:** Offer only valid connected aps as move targets ([#1685](https://github.com/anh1c/at-scd/issues/1685)) ([bfd43ba](https://github.com/anh1c/at-scd/commit/bfd43bab3e164d15f7aa2bafe5d0d428df9d10e7))
* Connected AP wizard element order ([#1703](https://github.com/anh1c/at-scd/issues/1703)) ([cd3b39a](https://github.com/anh1c/at-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))
* Export all plugins ([4ea401e](https://github.com/anh1c/at-scd/commit/4ea401e04184623d32386ae2dc618c633747fd4b))
* Fix plugins version ([9f57703](https://github.com/anh1c/at-scd/commit/9f57703ae0b06f329e8ba6be05d74584e5fcab52))
* Fix plugins version ([41a0657](https://github.com/anh1c/at-scd/commit/41a06576072e75ad9f3c21ae879c117904db9d62))
* Fix typo in export ([066ab0f](https://github.com/anh1c/at-scd/commit/066ab0fb2f6d8a4e09e6e4a46a27aeadc44ba269))
* **Import IED:** Fix order of edits ([#1698](https://github.com/anh1c/at-scd/issues/1698)) ([0831fa4](https://github.com/anh1c/at-scd/commit/0831fa4e4cde55a21c261b1b4b8b5994868509b0))
* inconsistent plugin activation behaviour caused by refactoring ([#1626](https://github.com/anh1c/at-scd/issues/1626)) ([00c4dc0](https://github.com/anh1c/at-scd/commit/00c4dc06f6d0cf1c39e4822a5b21d650d698785e))
* Moved towards get function from lit-translate ([#1471](https://github.com/anh1c/at-scd/issues/1471)) ([03dabf9](https://github.com/anh1c/at-scd/commit/03dabf94bf3e57f012bb078415ba0c284ce7b1e8))
* **open-scd:** Export test helpers ([e41610b](https://github.com/anh1c/at-scd/commit/e41610b31ac948c939b291f8bdc8a11fc4ba002a))
* openscd forgets disabled plugins ([#1618](https://github.com/anh1c/at-scd/issues/1618)) ([c39cd6c](https://github.com/anh1c/at-scd/commit/c39cd6cffde6fb37a68f2bf71b3cc74adeafd6b1))
* **plugins:** Fix core imports ([2f4f945](https://github.com/anh1c/at-scd/commit/2f4f945888f6034ce426928c22f02aefafbf4933))
* **plugins:** Fix core imports ([4c1a26a](https://github.com/anh1c/at-scd/commit/4c1a26a390f5824941a47905270e37de771a7f5f))
* **plugins:** logical nodes not populating when selecting IEDs ([2e147d8](https://github.com/anh1c/at-scd/commit/2e147d8147ef6fd6fc29d445c815e5b87d7a7f59))
* **plugins:** logical nodes not populating when selecting IEDs ([3327ffa](https://github.com/anh1c/at-scd/commit/3327ffadef77ed8db227a3f861fe5615c2f91e05))
* publish packages to npm ([2c38caa](https://github.com/anh1c/at-scd/commit/2c38caaa12a2b343b767ed48aa27ab9c85e6517c))
* publish packages to npm ([7ee5158](https://github.com/anh1c/at-scd/commit/7ee515894f0ad44089d32318c25f065688bee871))
* publish plugins to npm and remove empty packages from release step ([21fa2ac](https://github.com/anh1c/at-scd/commit/21fa2ac8f61816c04a6cef4d72f622befcb9dcf9))
* Raise plugins package version ([b140236](https://github.com/anh1c/at-scd/commit/b140236283982d3735dfd5c786615215ac9ce6aa))
* Raise plugins package version to 0.0.4 ([eb36364](https://github.com/anh1c/at-scd/commit/eb36364f6c4c2ff0aa426fb6d2e0bc2422606d87))
* Raise plugins version to 0.0.3 ([d651162](https://github.com/anh1c/at-scd/commit/d6511620a93f2b19b59b0854fbced0c0429458c2))
* Raise plugins version to 0.0.3 ([01c7c88](https://github.com/anh1c/at-scd/commit/01c7c881f2eb32252daf3019bd114e46002aad94))
* Rendering issues with icons ([d648035](https://github.com/anh1c/at-scd/commit/d648035c149494021ca63205f8928d57ace5e98c))
* Require lnInst only for regular lns ([#1713](https://github.com/anh1c/at-scd/issues/1713)) ([003161f](https://github.com/anh1c/at-scd/commit/003161fd5a0b363477ece059629ed2c0d6d86aa0))
* reset previous validation errors when validating ([#158](https://github.com/anh1c/at-scd/issues/158)) ([c497f27](https://github.com/anh1c/at-scd/commit/c497f275b47943cea78b430aaeefdb12246c0636))
* set scl schema version back to minimal of 2007B4 ([2832053](https://github.com/anh1c/at-scd/commit/2832053d9dd4e6f37d68576950c7bcbcb91e12a1))
* set scl schema version back to minimum of 2007B4 ([9d56926](https://github.com/anh1c/at-scd/commit/9d569262375fb7c109add431592a10b0264894fd))
* Settings addon translations ([cd3b39a](https://github.com/anh1c/at-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))
* **Settings:** Make language loader configureable ([#1693](https://github.com/anh1c/at-scd/issues/1693)) ([5205a9f](https://github.com/anh1c/at-scd/commit/5205a9f751d8e9dbc0cb5b2630af39c31dc09460))
* splitting up open-scd and plugins ([#1469](https://github.com/anh1c/at-scd/issues/1469)) ([200c030](https://github.com/anh1c/at-scd/commit/200c0308a96899a7bc06a4f0357423901c1fff49))
* Subscribing on minimal ExtRef definition ([#1551](https://github.com/anh1c/at-scd/issues/1551)) ([29483e6](https://github.com/anh1c/at-scd/commit/29483e6562061ae1edd69b2dccf33a512a8aef93))
* Trigger release please for plugins deployment ([8581fc4](https://github.com/anh1c/at-scd/commit/8581fc411da41139d6ce1efd2942c9b959117ee9))
* Trigger release please for plugins deployment ([5847670](https://github.com/anh1c/at-scd/commit/5847670f1fd275342ea6b4b289e93edb16a62b17))
* trigger release plugins and openscd ([cab8ff2](https://github.com/anh1c/at-scd/commit/cab8ff24eb0535f7e4e9f7241e2efe9033c99ee5))
* update package-lock.json ([76602d7](https://github.com/anh1c/at-scd/commit/76602d7ec5ddf312f6caf116f3a99e81fa2abd53))
* update public file urls ([#153](https://github.com/anh1c/at-scd/issues/153)) ([1523d83](https://github.com/anh1c/at-scd/commit/1523d83d547be7901d3ee316569d11c2c9b36736))
* update release please version to 0.37.2 ([#1632](https://github.com/anh1c/at-scd/issues/1632)) ([a3d6d2f](https://github.com/anh1c/at-scd/commit/a3d6d2f68952e98d62375b037b5b36bca63f325a))
* use materialized icons for primary apparatus ([#1498](https://github.com/anh1c/at-scd/issues/1498)) ([fa07ec2](https://github.com/anh1c/at-scd/commit/fa07ec2e12392f0973a138f8260837eec746a64d))


### 📚 Documentation

* update README files to clarify package relationships and npm usage ([#168](https://github.com/anh1c/at-scd/issues/168)) ([786ced0](https://github.com/anh1c/at-scd/commit/786ced0bb3864cb82025697a2f64446ec531f888))


### 📦 Miscellaneous Chores

* Add base dialog styling ([bc7bf9e](https://github.com/anh1c/at-scd/commit/bc7bf9e818c81ca57197dbd73517ed196686e08d))
* Add cdc editv2 ([4534a6e](https://github.com/anh1c/at-scd/commit/4534a6e251fc85113a6f77c3ce154f4bd0141d58))
* Add create addresses dialog ([3aa2859](https://github.com/anh1c/at-scd/commit/3aa2859f01c07d29413df0355b006f65631be2b8))
* Add custom icon components ([6e499ef](https://github.com/anh1c/at-scd/commit/6e499eff8d6e6ee377e97e34658a2297775bf68b))
* Add dialog manager and base dialog ([c76f995](https://github.com/anh1c/at-scd/commit/c76f9957a14a399f4bbebc718b5dcaf0d5662b2f))
* Add nx graph ([#1497](https://github.com/anh1c/at-scd/issues/1497)) ([316bf8a](https://github.com/anh1c/at-scd/commit/316bf8a20d964ed462b52cc9e67139c8797ea4ce))
* Add ti control fields ([59487cd](https://github.com/anh1c/at-scd/commit/59487cd68c4da7f81606ac070fd5e435872349c5))
* Add web test runner scoped elements plugin ([489e671](https://github.com/anh1c/at-scd/commit/489e6718d1451f6870ff3c09b3f043877e3fedcc))
* added history addon ([#1472](https://github.com/anh1c/at-scd/issues/1472)) ([43ede7c](https://github.com/anh1c/at-scd/commit/43ede7cb2ad31b2b9c65e660894209c7bb3ec917))
* Added oscd-edit-completed Event ([#1533](https://github.com/anh1c/at-scd/issues/1533)) ([b967902](https://github.com/anh1c/at-scd/commit/b967902748e93d57519a71b362b3c9771e7aaaeb))
* Adjust core imports ([72cc80c](https://github.com/anh1c/at-scd/commit/72cc80c071bd6f1ed10363cca08d9d7375eb24e6))
* Adjust distribution ([e7b20b5](https://github.com/anh1c/at-scd/commit/e7b20b5bbd8b3613bf2db0045a08cc86c27a8497))
* Adjust imports ([db6433f](https://github.com/anh1c/at-scd/commit/db6433f8d9fb5b09cf7c98d5b79807b23f220cbf))
* Adjust imports ([df6f607](https://github.com/anh1c/at-scd/commit/df6f6073e9804ef508a707f968b1f08829ea5540))
* Adjust imports and distribution ([97dd834](https://github.com/anh1c/at-scd/commit/97dd834165f6c046fc3d11214993d540d4037e6c))
* Adjust more imports ([c23e8c3](https://github.com/anh1c/at-scd/commit/c23e8c3bf5cd6d8da547cc9da3b2b916bf0f0258))
* Adjust more imports ([73efee8](https://github.com/anh1c/at-scd/commit/73efee87e50d767c39373e79893cea9c4eb8446b))
* Adjust open-scd imports ([9cb41b7](https://github.com/anh1c/at-scd/commit/9cb41b7f0c77b11738efc4b1919bbf0147e3826f))
* Adjust package.json ([d9bd530](https://github.com/anh1c/at-scd/commit/d9bd53080d2f92de9f228db713476d43be5c9dae))
* Adjust xml imports ([5c0aa47](https://github.com/anh1c/at-scd/commit/5c0aa470c9a8ac7dd53fd270c048de4552df111a))
* Backport ied plugin changes ([a819e00](https://github.com/anh1c/at-scd/commit/a819e00b6aa54328ee06033056699fa539f4d336))
* Backport plugins changes ([5353263](https://github.com/anh1c/at-scd/commit/535326360f2558e16550e1e6d7429c8d76607d4c))
* Build type declarations for plugins package ([32d44e3](https://github.com/anh1c/at-scd/commit/32d44e311bd9bbaddb3e8fd7453b43370149536e))
* Export all plugins ([3a6ba2c](https://github.com/anh1c/at-scd/commit/3a6ba2ce8dcd544c333001f9e589cbe8e6c7bebf))
* Export substation plugin ([af8f6b7](https://github.com/anh1c/at-scd/commit/af8f6b75a1fb2425cb9f4ebe214cb6c94f74ade4))
* Export test helpers ([fafc416](https://github.com/anh1c/at-scd/commit/fafc4169c4bf6b1874c9dec8f7829e8d8296fcce))
* Fix abstractda select event handling ([886e279](https://github.com/anh1c/at-scd/commit/886e279388e806739a67c705cd353c96e6201434))
* Fix abstractda test ([efbce0c](https://github.com/anh1c/at-scd/commit/efbce0ca62112519e315311d9b75048206ff33a9))
* Fix action pane titles ([9129832](https://github.com/anh1c/at-scd/commit/9129832497764a0f05ce9153f61b90eb63f00b47))
* Fix build error ([d962f8b](https://github.com/anh1c/at-scd/commit/d962f8b58e6d8bec166c5e2934fc9c0aa2f09f2e))
* Fix compiler errors ([ac5bec8](https://github.com/anh1c/at-scd/commit/ac5bec8d2e95c1c289599ca4fe940f9d4a35e8e7))
* Fix connectedap-c test ([f1c1583](https://github.com/anh1c/at-scd/commit/f1c1583b26c4829e4f345d876a4038a2de9c921d))
* Fix connectedap-container test ([a2aba18](https://github.com/anh1c/at-scd/commit/a2aba18a18088d19548db729f23d3109bfd505f5))
* Fix control-blocks-container test ([1043943](https://github.com/anh1c/at-scd/commit/10439439b306e9e9d1b4ae4f543cc89cb157f664))
* Fix datasets-container ([6d87a6d](https://github.com/anh1c/at-scd/commit/6d87a6d245edd9d95d9dba1672e3f8dd935623aa))
* Fix help plugin ([ffe922a](https://github.com/anh1c/at-scd/commit/ffe922af015bfdb65cac23094d0df776a3f257bc))
* Fix import ([a9f2307](https://github.com/anh1c/at-scd/commit/a9f2307b71b5a72be82f559458ead007b0682410))
* Fix l-node-edtior test ([2eda219](https://github.com/anh1c/at-scd/commit/2eda219cbfd0a26ca851b92885ff20267edd3401))
* Fix lnode test ([1fdf893](https://github.com/anh1c/at-scd/commit/1fdf893013415ebe07930796d1ff1acde31b5fde))
* Fix more icons ([dbbfd2e](https://github.com/anh1c/at-scd/commit/dbbfd2eef58fdc1e12e9ddcd3ab1b659ab5cb59e))
* Fix more tests ([d3af829](https://github.com/anh1c/at-scd/commit/d3af8298e684ff589cefa1c5e2a180dfcffdaf98))
* Fix more tests ([c11148f](https://github.com/anh1c/at-scd/commit/c11148f6c3ed19abbe9cc69e2329eb321de58de1))
* Fix more tests ([82f3ea2](https://github.com/anh1c/at-scd/commit/82f3ea2cd9969c0f6f0bc2ea7f94dbc7badf39d5))
* Fix more tests ([4f3a513](https://github.com/anh1c/at-scd/commit/4f3a513b5818d5e175f01c1dc1d94c8e1c2bf9ab))
* Fix more tests ([f494a1b](https://github.com/anh1c/at-scd/commit/f494a1b1396128d325338647cc9104fd06552eff))
* Fix more tests ([7dc197f](https://github.com/anh1c/at-scd/commit/7dc197f5c4dda07aa1da24891e06b68e99bac56b))
* Fix plugin rendering issues ([2b9d085](https://github.com/anh1c/at-scd/commit/2b9d085b12a94616f430ced2cc107c0573a2ea10))
* Fix plugins ([d249838](https://github.com/anh1c/at-scd/commit/d2498387ee01560667074424a86025cb1fd581c1))
* Fix plugins tests ([7558102](https://github.com/anh1c/at-scd/commit/75581022ea47c8f6ee71dad1a3ccfc4b015582df))
* Fix subnetwork test ([4942ac5](https://github.com/anh1c/at-scd/commit/4942ac5f5bd1178cdab5c5bc6e270dcc23cec5f8))
* Fix typo in export ([b581fea](https://github.com/anh1c/at-scd/commit/b581feacf98e5fa2807dffedaf2dee5f11c3f1e8))
* Fix UpdateDescriptionABB test ([c39cbe3](https://github.com/anh1c/at-scd/commit/c39cbe3a8d65452a9a3936d51bd104fe35fe60cd))
* Fix UpdateDescriptionSEL test ([0399eb1](https://github.com/anh1c/at-scd/commit/0399eb1128e21f824b61238a8b6ac16adf4b9ec4))
* Fix voltage-level-editor-wizarding-editing test ([7f0fab1](https://github.com/anh1c/at-scd/commit/7f0fab15683fcab2cd3483763b4c31bd301609dd))
* fix/test build dependencies ([#1515](https://github.com/anh1c/at-scd/issues/1515)) ([e25f0c5](https://github.com/anh1c/at-scd/commit/e25f0c55df4a62e29aca1e1c55f520a2bbd6db42))
* Ignore plugins tests for now ([d3593a5](https://github.com/anh1c/at-scd/commit/d3593a5354e96be28ab7e68b37d02972252ad77c))
* Implement edit event for all cdcs ([23a3f21](https://github.com/anh1c/at-scd/commit/23a3f210b070c3399541d2065db6adf61d557c29))
* Import plugin package through NPM part 1 ([765a61d](https://github.com/anh1c/at-scd/commit/765a61d93b4004011a21bac8952ddf05491da3d7))
* lnode-type-wizard.test ([b224501](https://github.com/anh1c/at-scd/commit/b224501dde460f7deb508fc94cc8ea9c4d43891d))
* Migrate checkbox ([86d9a17](https://github.com/anh1c/at-scd/commit/86d9a17f7fc0ab3bff345051d8424360a472d609))
* Migrate fab ([2a31947](https://github.com/anh1c/at-scd/commit/2a31947c0c2d3b879200e67cdc596319a6d4e518))
* Migrate icon and icon button ([142c3d5](https://github.com/anh1c/at-scd/commit/142c3d5dddf805cea2f0afd667534c896103506a))
* Migrate list and switch ([65ab9a0](https://github.com/anh1c/at-scd/commit/65ab9a08b821168188b8a7a17105e44ceb8a3f9d))
* Migrate textarea ([e0ba547](https://github.com/anh1c/at-scd/commit/e0ba5478709744720134ed9fc8083223c633dbef))
* migrate to pnpm ([#100](https://github.com/anh1c/at-scd/issues/100)) ([99da4ec](https://github.com/anh1c/at-scd/commit/99da4ec8128a745fd9821e3e6d87e64abdd70ef5))
* moving events, interfaces and types to @openscd/core ([#1507](https://github.com/anh1c/at-scd/issues/1507)) ([7268462](https://github.com/anh1c/at-scd/commit/72684624b387c6eca760987b3ca27094798efccf))
* pin dependencies + add npm dependabot config ([#102](https://github.com/anh1c/at-scd/issues/102)) ([b7ebf11](https://github.com/anh1c/at-scd/commit/b7ebf1138241c471005060319c3268b66ec9c488))
* Plugins rendering issues ([b651674](https://github.com/anh1c/at-scd/commit/b651674c24ce426c10352f17b0df39df3d337553))
* Port plugins changes from compas ([4de8e09](https://github.com/anh1c/at-scd/commit/4de8e092f68b04802e4cd7ccd714644b2ba2242c))
* Publish open-scd as NPM package ([954491c](https://github.com/anh1c/at-scd/commit/954491c73c990328e5a1a1c3a175c5afca22492f))
* Raise plugins version to 0.0.10 ([1a7ba1f](https://github.com/anh1c/at-scd/commit/1a7ba1fcad6b93d06906e36a08f00254dffd0106))
* Raise plugins version to 0.0.6 ([cc41f87](https://github.com/anh1c/at-scd/commit/cc41f873bc3b1bad2e7e5768a67c47208d9657f7))
* Raise versions ([ae74d8d](https://github.com/anh1c/at-scd/commit/ae74d8d0284718df3794326647262d3610a9318e))
* release main ([3346d70](https://github.com/anh1c/at-scd/commit/3346d7036f5196564b78b69fd12b04462808a67a))
* release main ([0aa55f5](https://github.com/anh1c/at-scd/commit/0aa55f5f8372dac821ef266b4d69338445dad25c))
* release main ([6e9dc2c](https://github.com/anh1c/at-scd/commit/6e9dc2c846486f36bfc49d43c73b9ab73a87d19b))
* release main ([071e6aa](https://github.com/anh1c/at-scd/commit/071e6aa9182178a9d873e03bc3979dbb03a5d5bd))
* release main ([6867b0c](https://github.com/anh1c/at-scd/commit/6867b0ca5b5239746824173222d913066d664685))
* release main ([480b059](https://github.com/anh1c/at-scd/commit/480b059947cff800bb028541c1bd2457c6b45807))
* release main ([497b9cb](https://github.com/anh1c/at-scd/commit/497b9cb61941005fa08a37b029a905809f91a9ac))
* release main ([e09904c](https://github.com/anh1c/at-scd/commit/e09904c01bd314366c47a3690ce199719791bd0c))
* release main ([3daf43e](https://github.com/anh1c/at-scd/commit/3daf43e3fb15e61021d35ed504dcb618dcaf624f))
* release main ([0102e58](https://github.com/anh1c/at-scd/commit/0102e5805635bd9dabaa1894f2251ae01c1ed6f1))
* release main ([d7f53f0](https://github.com/anh1c/at-scd/commit/d7f53f0c55fae500a12ecf5dbc4bb22ecb6f3ac8))
* release main ([9b8c19a](https://github.com/anh1c/at-scd/commit/9b8c19a07b89c34173b34f78206214080becdf27))
* release main ([8b84be3](https://github.com/anh1c/at-scd/commit/8b84be328abdc1e42dc2d87453066213831525bd))
* release main ([19e8cc4](https://github.com/anh1c/at-scd/commit/19e8cc41cbb0e4b2e28c044b0d091c567542ef29))
* release main ([#143](https://github.com/anh1c/at-scd/issues/143)) ([0714895](https://github.com/anh1c/at-scd/commit/0714895b66521746408684fe88b79af96833ef9b))
* release main ([#147](https://github.com/anh1c/at-scd/issues/147)) ([817ba50](https://github.com/anh1c/at-scd/commit/817ba50dff2fd55b29a2d4b363e3d96c3f7e56a2))
* release main ([#154](https://github.com/anh1c/at-scd/issues/154)) ([4282f87](https://github.com/anh1c/at-scd/commit/4282f8751e419c531fc4d599a058c3e8d961cfe0))
* release main ([#159](https://github.com/anh1c/at-scd/issues/159)) ([eddf4e9](https://github.com/anh1c/at-scd/commit/eddf4e937210667b3ade1dc151ef2361461daefe))
* Remove broken tests ([25fd01d](https://github.com/anh1c/at-scd/commit/25fd01d2266c25a6c0581e7b5bb13b7d3fa19d17))
* Replace lnode icons ([1b1130b](https://github.com/anh1c/at-scd/commit/1b1130b9b712926150ebcc703ce9e7f47bb1003d))
* Replace toggle button ([a2f77c2](https://github.com/anh1c/at-scd/commit/a2f77c26181d36c434ce848f5cfa7057b2522c5a))
* Reset do dialog state on close ([08c9561](https://github.com/anh1c/at-scd/commit/08c956160092920873b3259f30fe9cb3297d1807))
* restoring broken "Build and deploy" workflow ([#1506](https://github.com/anh1c/at-scd/issues/1506)) ([14ea32c](https://github.com/anh1c/at-scd/commit/14ea32c59bc8b7765b3bbc685a1c684a1b4b8f35))
* Revert dep version ([bd19ab9](https://github.com/anh1c/at-scd/commit/bd19ab9038a571af8e1735d59b8b2851521d9b1d))
* Revert plugins version ([cf8dff8](https://github.com/anh1c/at-scd/commit/cf8dff825f34c4a61564d42959d3180f262890b4))
* Revert plugins version ([204cbb7](https://github.com/anh1c/at-scd/commit/204cbb70137e0a546835e408884f138bca8a72d0))
* Simplify ti selects ([e83a9e2](https://github.com/anh1c/at-scd/commit/e83a9e202a7da95cfe1452378123ce0462a385bb))
* trigger workflow ([8af8d1b](https://github.com/anh1c/at-scd/commit/8af8d1bef5dde354b57fd3e726fa60ff0f80704f))
* Update 104 plugin ([7c03f30](https://github.com/anh1c/at-scd/commit/7c03f3097c57874f1c00ab185c4d7d1b86fb1fe2))
* Update ied container snapshot ([c3d37c4](https://github.com/anh1c/at-scd/commit/c3d37c42465f64e093740e4ea9c808bf8f493dfb))
* update open-scd version in plugins ([5c5c6c4](https://github.com/anh1c/at-scd/commit/5c5c6c4a940230ae020e2221454d8446b7ca3978))
* update release please version to 0.37.2 ([#1627](https://github.com/anh1c/at-scd/issues/1627)) ([1e50fd9](https://github.com/anh1c/at-scd/commit/1e50fd935512172d97d923b62e25bd064d850ca0))
* update repository URLs to use com-pas organisation ([#145](https://github.com/anh1c/at-scd/issues/145)) ([d35b5ef](https://github.com/anh1c/at-scd/commit/d35b5eff1b31dd084b1156ab71f7fbae873102d1))
* Update snapshots ([7a3dde0](https://github.com/anh1c/at-scd/commit/7a3dde04b0f9ae6af84bfd547fc1e57ee226d050))
* Update test snapshots ([b9ada0f](https://github.com/anh1c/at-scd/commit/b9ada0fef7358523c92fa65f2f7bdf2ad03c2f03))
* Use oscd-ui components ([34dba8e](https://github.com/anh1c/at-scd/commit/34dba8e97586f32489bebe63f6654491125b1ee6))
* Use ui lib mwc components ([9b2b565](https://github.com/anh1c/at-scd/commit/9b2b5655328df4983e7495020648135048829bce))
* WIP create address edits ([f6466be](https://github.com/anh1c/at-scd/commit/f6466be3c33055164607619661d7f850b6a98b04))
* WIP Create edits ([3f82b4a](https://github.com/anh1c/at-scd/commit/3f82b4abf93597f67130a5dd42ed17ca7168adc2))

## [0.1.3](https://github.com/com-pas/open-scd/compare/plugins@v0.1.2...plugins@v0.1.3) (2026-08-07)


### 🐞 Bug Fixes

* reset previous validation errors when validating ([#158](https://github.com/com-pas/open-scd/issues/158)) ([c497f27](https://github.com/com-pas/open-scd/commit/c497f275b47943cea78b430aaeefdb12246c0636))

## [0.1.2](https://github.com/com-pas/open-scd/compare/plugins@v0.1.1...plugins@v0.1.2) (2026-07-29)


### 🐞 Bug Fixes

* update public file urls ([#153](https://github.com/com-pas/open-scd/issues/153)) ([1523d83](https://github.com/com-pas/open-scd/commit/1523d83d547be7901d3ee316569d11c2c9b36736))

## [0.1.1](https://github.com/com-pas/open-scd/compare/plugins@v0.1.0...plugins@v0.1.1) (2026-07-09)


### 📦 Miscellaneous Chores

* update repository URLs to use com-pas organisation ([#145](https://github.com/com-pas/open-scd/issues/145)) ([d35b5ef](https://github.com/com-pas/open-scd/commit/d35b5eff1b31dd084b1156ab71f7fbae873102d1))

## [0.1.0](https://github.com/com-pas/open-scd/compare/plugins@v0.0.13...plugins@v0.1.0) (2026-07-09)


### ✨ Features

* (plugins): validate duplicate IPs in ConnectedAP edit wizard ([24366f2](https://github.com/com-pas/open-scd/commit/24366f29084eddfcffd900eb1999b574f1564a42))
* **communication:** validate duplicate IPs in ConnectedAP within the same SubNetwork ([568c944](https://github.com/com-pas/open-scd/commit/568c9442d9b4f6ab754805d6e770b67f5305c436))


### 📦 Miscellaneous Chores

* Fix plugins ([d249838](https://github.com/com-pas/open-scd/commit/d2498387ee01560667074424a86025cb1fd581c1))
* migrate to pnpm ([#100](https://github.com/com-pas/open-scd/issues/100)) ([99da4ec](https://github.com/com-pas/open-scd/commit/99da4ec8128a745fd9821e3e6d87e64abdd70ef5))
* pin dependencies + add npm dependabot config ([#102](https://github.com/com-pas/open-scd/issues/102)) ([b7ebf11](https://github.com/com-pas/open-scd/commit/b7ebf1138241c471005060319c3268b66ec9c488))

## [0.0.13](https://github.com/com-pas/open-scd/compare/plugins@v0.0.12...plugins@v0.0.13) (2026-05-28)


### 🐞 Bug Fixes

* change lnode rendering ([dc93cab](https://github.com/com-pas/open-scd/commit/dc93cab47353b847f64c8697719def3aec4d2218))
* change lnode rendering ([68d74f1](https://github.com/com-pas/open-scd/commit/68d74f1778820cb22b95435c1b4b8cbe627cce8f))

## [0.0.12](https://github.com/com-pas/open-scd/compare/plugins@v0.0.11...plugins@v0.0.12) (2026-05-27)


### 🐞 Bug Fixes

* Fix typo in export ([066ab0f](https://github.com/com-pas/open-scd/commit/066ab0fb2f6d8a4e09e6e4a46a27aeadc44ba269))


### 📦 Miscellaneous Chores

* Fix typo in export ([b581fea](https://github.com/com-pas/open-scd/commit/b581feacf98e5fa2807dffedaf2dee5f11c3f1e8))

## [0.0.11](https://github.com/com-pas/open-scd/compare/plugins@v0.0.10...plugins@v0.0.11) (2026-05-27)


### 🐞 Bug Fixes

* Export all plugins ([4ea401e](https://github.com/com-pas/open-scd/commit/4ea401e04184623d32386ae2dc618c633747fd4b))


### 📦 Miscellaneous Chores

* Export all plugins ([3a6ba2c](https://github.com/com-pas/open-scd/commit/3a6ba2ce8dcd544c333001f9e589cbe8e6c7bebf))

## [0.0.10](https://github.com/com-pas/open-scd/compare/plugins@v0.0.9...plugins@v0.0.10) (2026-05-26)


### 🐞 Bug Fixes

* Add export for substation plugin ([75ea35f](https://github.com/com-pas/open-scd/commit/75ea35f3df927211f5fbf6c90d09d43c4aebb5c9))


### 📦 Miscellaneous Chores

* Export substation plugin ([af8f6b7](https://github.com/com-pas/open-scd/commit/af8f6b75a1fb2425cb9f4ebe214cb6c94f74ade4))
* Raise plugins version to 0.0.10 ([1a7ba1f](https://github.com/com-pas/open-scd/commit/1a7ba1fcad6b93d06906e36a08f00254dffd0106))
* Revert plugins version ([cf8dff8](https://github.com/com-pas/open-scd/commit/cf8dff825f34c4a61564d42959d3180f262890b4))

## [0.0.9](https://github.com/com-pas/open-scd/compare/plugins@v0.0.8...plugins@v0.0.9) (2026-05-26)


### 🐞 Bug Fixes

* **plugins:** logical nodes not populating when selecting IEDs ([2e147d8](https://github.com/com-pas/open-scd/commit/2e147d8147ef6fd6fc29d445c815e5b87d7a7f59))
* **plugins:** logical nodes not populating when selecting IEDs ([3327ffa](https://github.com/com-pas/open-scd/commit/3327ffadef77ed8db227a3f861fe5615c2f91e05))

## [0.0.8](https://github.com/com-pas/open-scd/compare/plugins@v0.0.7...plugins@v0.0.8) (2026-05-20)


### 🐞 Bug Fixes

* update package-lock.json ([76602d7](https://github.com/com-pas/open-scd/commit/76602d7ec5ddf312f6caf116f3a99e81fa2abd53))


### 📦 Miscellaneous Chores

* update open-scd version in plugins ([5c5c6c4](https://github.com/com-pas/open-scd/commit/5c5c6c4a940230ae020e2221454d8446b7ca3978))

## [0.0.7](https://github.com/com-pas/open-scd/compare/plugins@v0.0.6...plugins@v0.0.7) (2026-05-19)


### 🐞 Bug Fixes

* change release please config ([16d553c](https://github.com/com-pas/open-scd/commit/16d553ccc4dd4154d1c643d444951822724d990e))
* trigger release plugins and openscd ([cab8ff2](https://github.com/com-pas/open-scd/commit/cab8ff24eb0535f7e4e9f7241e2efe9033c99ee5))


### 📦 Miscellaneous Chores

* Fix connectedap-container test ([a2aba18](https://github.com/com-pas/open-scd/commit/a2aba18a18088d19548db729f23d3109bfd505f5))
* Fix more tests ([d3af829](https://github.com/com-pas/open-scd/commit/d3af8298e684ff589cefa1c5e2a180dfcffdaf98))
* Fix more tests ([c11148f](https://github.com/com-pas/open-scd/commit/c11148f6c3ed19abbe9cc69e2329eb321de58de1))
* Fix plugins tests ([7558102](https://github.com/com-pas/open-scd/commit/75581022ea47c8f6ee71dad1a3ccfc4b015582df))
* Update ied container snapshot ([c3d37c4](https://github.com/com-pas/open-scd/commit/c3d37c42465f64e093740e4ea9c808bf8f493dfb))
* Update test snapshots ([b9ada0f](https://github.com/com-pas/open-scd/commit/b9ada0fef7358523c92fa65f2f7bdf2ad03c2f03))
