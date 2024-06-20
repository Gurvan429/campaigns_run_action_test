# Campaigns run action

This action runs campaigns by ids, and output their corresponding launches (bulks) ids.

## Inputs

### `username`

**Required** The email of the account that will run campaigns.

### `password`

**Required** The password of the account that will run campaigns.

### `campaign_ids`

**Required** The campaign ids separated by commas.

## Outputs

### `result`

An array of bulk ids.

## Example usage

```yaml
uses: mbouchotsuricate/campaigns_run_action@1.0.0
with:
  email: 'xxx@xxx.com'
  password: 'xxx'
  campaign_ids: '123,568'
```
