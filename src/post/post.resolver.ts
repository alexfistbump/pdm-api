import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { NewPost, Post } from 'src/graphql';
import { PostService } from './post.service';

@Resolver(of => Post)
export class PostResolver {
    constructor(private readonly postService: PostService){}

    @Query(returns => [Post],{
        name:'getPosts'
    })
    async posts() {
        return this.postService.posts();
    }
    
    @Mutation(returns => Post, {
        name: 'createPost'
    })
    async create(@Args('input') args: NewPost) {
        return this.postService.createPost(args);
    }

}
