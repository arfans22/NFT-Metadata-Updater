# Metadata Updater & Merger for NFT

## Introduction
This an NFT Metadata updater & merger allow you to add, replace, and remove traits using node js.
I use it for my own project called [Movin Frens NFT](https://twitter.com/movinfrens) to simplify from 82 properties into just 9.

If you found my work useful for any of your projects, please make some donations to support me. I would really appreaciate that.

**Metamask address**: 0x33EDC2CE3B7CA2dd2CE61CFB1cF7D82e6de0edA7

**Twitter**: https://twitter.com/arfarfans

**Discord Username**: amos#9036

## Feature
- Update Collection Name, Descriptions and imageuri.
- Add, Replace and Remove traits.
- Merge all metadata.

## Example
* I have traits like this:
```
    { "trait_type": "Body_1"},
    { "trait_type": "Body_2"},
    { "trait_type": "Body_3"},
```
* Want to simplify to be:
```
    { "trait_type": "Body"},
```
## Execution

```node _update.js``` to updating your metadata
```node _merge.js``` to merge the whole metadata into 1 file called _metadata.json

## You can copy and paste for bulk update:

```
      if (attribute.trait_type === 'Props1') {
        attribute.trait_type = 'Background';
      }
      if (attribute.trait_type === 'Props2') {
        attribute.trait_type = 'Skin';
      }
      if (attribute.trait_type === 'Props3') {
        attribute.trait_type = 'Skin';
      }
      
 ```
