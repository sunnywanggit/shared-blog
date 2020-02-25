import marked from 'marked'

import blog from '@/api/blog.js'

export default {
    data(){
        return{
            title:'',
            rawContent:'',
            user:{},
            createdAt:''
        }
    },
    created(){
        this.blogId = this.$route.params.blogId
        blog.getDetail({blogId:this.blogId})
            .then(res=>{
                this.title = res.data.title
                this.rawContent = res.data.content
                this.user = res.data
                this.createdAt = res.data.createdAt
                console.log(res);

            })
    },
    computed:{
        markdown(){
            return marked(this.rawContent)
        }
    }
}