<style lang="scss">



</style>

<template>

<div class="" style="height:100%;" v-loading.body='loading'>
    <div @click='login()' style="margin-top:10%; margin-left:50%;">
        <button type="button" name="button">登陆</button>
    </div>
</div>

</template>

<script>

import Loading from 'element-ui/packages/loading/index.js'
import Message from 'element-ui/packages/Message/index.js'


export default {
    name: "",
    data: () => ({
        loading: false
    }),
    mounted() {
        let _this = this;
        // _this.adminApi.islogin();
        _this.$nextTick(function() {

        })

    },
    methods: {
        login: function() {
            let _this = this;
            var url = _this.adminApi.host + '/htypctorg/index/handle',
                data = {
                    'userId': '0801'
                },
                loading = function() {
                    _this.loading = true;
                },
                success = function(data) {
                  var state = data.data;
                  _this.adminApi.setState(state);
                  Message({
                      'message': '登陆成功',
                      'type': 'success',
                      'onClose':function(){
                            _this.$router.push({
                                path: '/'
                            })
                      }
                  });
                },
                complete = function() {
                    _this.loading = false;
                }
            _this.adminApi.getJsonp(url, data, loading, success, complete)
        }
    },
    components: {
        Loading,
        Message
    }
}

</script>
