# Install services

### Elasticsearch

```bash
brew tap elastic/tap
brew install elastic/tap/elasticsearch-full
brew services start elastic/tap/elasticsearch-full
```

### Kibana

```bash
brew install elastic/tap/kibana-full
brew services start elastic/tap/kibana-full
```

### Mongo

```bash
brew tap mongodb/brew
brew services start mongodb-community@6.0
```

Elasticsearch MACos Ventura issue: https://github.com/elastic/elasticsearch/issues/91159

# Aggregations

### List indices

```bash
node src/steps/step01.js
```

### Delete indices

```bash
node src/steps/step02.js
```

### Bulk insert 1kk records

```bash
node src/steps/step03.js
```

### Aggregate 1kk records

```bash
node src/steps/step04.js
```

### Insert records for bucket aggregations

```bash
node src/steps/step05.js
```
