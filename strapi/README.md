# VMS Engine with Strapi 4

## Requirement

- Node v16.x.x or more

## `clone`

```
git clone https://gitlab.com/ths-develops-team/software-management/cms/strapi4.git vms-aestiq
cd vms-aestiq
```

## `start`

```
yarn start | docker-compose up -d
```

## `build`

```
yarn build | docker build -t teohong/vms-aestiq:latest .
```

## `running`

```bash
yarn start | docker run --name=vms-aestiq -d -p 1337:1337 teohong/vms-aestiq 
```
