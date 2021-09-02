## CURL Requests for domain management


### Get DNS Records - GET
```bash
curl "https://test.httpapi.com/api/dns/manage/search-records.json?auth-userid=0&api-key=key&domain-name=domain.com&type=A&no-of-records=10&page-no=1" -H "Accept: application/json, text/plain, */*" -H "Connection: keep-alive"
```

### Add a Record - POST
```bash
curl "https://test.httpapi.com/api/dns/manage/add-ipv4-record.json?auth-userid=0api-key=key6&domain-name=rrocha.uk&value=1.2.3.4&host=teste" -H "" -H "Connection: keep-alive"
```