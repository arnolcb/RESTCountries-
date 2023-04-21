<template>
  <Card style="width: 50%">
      <!--<template #title>About {{ name }} </template>-->
      <template #content>
          <p>
              {{ $t('name') }}: <span>{{ name }}</span>
          </p>
          <p>
              {{ $t('officialName') }}: <span>{{ officialName }}</span>
          </p>
          <p>
              {{ $t('currencies') }}: <span>{{ currencies }}</span>
          </p>
          <p>
              {{ $t('capital') }}: <span>{{ capital }}</span>
          </p>
          <p>
              {{ $t('region') }}: <span>{{ region }}</span>
          </p>
          <p>
              {{ $t('subregion') }}: <span>{{ subregion }}</span>
          </p>
          <p>{{ $t('languages') }}:</p>
          <ul role="list" aria-label="languages">
              <li
                  v-for="d in languages" :key="d">{{ d }}
              </li>
          </ul>
          <p>
              {{ $t('area') }}: <span> {{area}} km²</span>
          </p>
          <p>
              {{ $t('population') }}: <span>{{ population }} habitants</span>
          </p>
          <img class="flag" :alt="name" :src="flag"/>
          <img class="coatOfArms" :alt="name" :src="coatOfArms"/>

      </template>

  </Card>
</template>

<script>
export default {
    name: "CardComponent",
    props:['name',
        'officialName',
        'currencies',
        'capital',
        'region',
        'subregion',
        'languages',
        'area',
        'population',
        'flag',
        'coatOfArms',],
}
</script>

<style scoped>

.flag{
    width: 20%;
    height: 20%;
    object-fit: cover;
}

.coatOfArms {
    width: 20%;
    height: 10%;
    object-fit: cover;
}

</style>