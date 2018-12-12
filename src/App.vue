<template>
    <section>
        <header>
            {{msg}}
        </header>
        <ul>
            <li>
                <router-link to="/PageOneLink">第一页</router-link>
            </li>
            <li>
                <router-link to="/PageTwoLink">第二页</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "sunflower - 数据可视化"
    };
  }
};
</script>
