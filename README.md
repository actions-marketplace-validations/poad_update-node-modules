# update-node-modules

Updates the node modules by package.json with jq.

## Usage

```$yaml
- uses: poad/update-node-modules@v1.0.5
　with:
    # path to package.json
    # Default: ./
   path: ./
    # true if you use yarn, false if you use npm
    # Default: false
   yarn: false
```
