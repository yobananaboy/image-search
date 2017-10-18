Image search abstraction layer
==============================

How to use
----------
A service for making image searches. Search for an image and you will be shown ten results. You can also choose when to start searching.

To make a search, visit `https://matts-img-search.glitch.me/api/imagesearch/<searchterm>`, where `<searchterm>` is the term for the image you are searching.

You can also choose either to paginate through results by specifying an offset, or you can choose the index to start the search from.

To set the offset, you use `https://matts-img-search.glitch.me/api/imagesearch/cat?offset=2`

To start at a certain index, you use `https://matts-img-search.glitch.me/api/imagesearch/cat?start=11`

(Both searches will reveal the same results, because there are ten results displayed per page and the index starts at 1)

You can set an offset between 1 and 9 and start a search between 1 and 90 (Google's custom search API gives you the first 100 results free).

View the last ten searches and when they happened by visiting `https://matts-img-search.glitch.me/api/latest/imagesearch`.

Example search usage
--------------------

`https://matts-img-search.glitch.me/api/imagesearch/fat cat`

Example search output
---------------------

```
[
{
  "url": "https://img.buzzfeed.com/buzzfeed-static/static/2016-07/29/15/asset/buzzfeed-prod-web01/sub-buzz-16791-1469819248-1.jpg?downsize=715:*&output-format=auto&output-quality=auto",
  "snippet": "19 Pictures Of Fat Cats That Will Improve Your Day",
  "context": "https://www.buzzfeed.com/javieraceves/fat-cats"
},
{
  "url": "http://www.petguide.com/wp-content/uploads/2016/10/Istanbul-Famous-Fat-Cat-copy.jpg",
  "snippet": "Famous Fat Cat Who Inspired Meme Honored With Statue",
  "context": "http://www.petguide.com/blog/cat/famous-fat-cat-who-inspired-meme-honored-with-statue/"
},
{
  "url": "https://i.pinimg.com/736x/c2/16/25/c2162533930ef1b9ef8d5cb3ae8ada17--lose-belly-fat-fat-cats.jpg",
  "snippet": "Best 25+ Fat cats ideas on Pinterest | Fat cat meme, Fat cat humor ...",
  "context": "https://www.pinterest.com/explore/fat-cats/"
},
{
  "url": "https://cdn8.littlethings.com/app/uploads/2017/03/Chickens-Love-Fat-Cat-2-600x599.jpg",
  "snippet": "Chickens Love This Adorable Fat Cat",
  "context": "https://www.littlethings.com/chickens-love-fat-cat/"
},
{
  "url": "http://www.our-happy-cat.com/images/sleeping-fat-cat.jpg",
  "snippet": "Fat Cat - Provide Good Cat Care With The Right Amount Of Cat food.",
  "context": "http://www.our-happy-cat.com/fat-cat.html"
},
{
  "url": "https://cdn.ipetitions.com/user-images/petitions/save-fatcat/Z1iNBh9SaC8sjtgEgxwr_Fat-Cat-Facts-pets-pet-cat-Cats.jpg",
  "snippet": "Petition SAVE FATCAT",
  "context": "https://www.ipetitions.com/petition/save-fatcat"
},
{
  "url": "http://fatcatart.com/wp-content/gallery/dutch-art/thumbs/thumbs_Helst-Portret-van-Gerard-Andriesz-Bicker-cat-w.jpg",
  "snippet": "Gallery — Great Artists' Mews",
  "context": "http://fatcatart.com/gallery/?lang=en"
},
{
  "url": "http://static.flickr.com/34/122530930_6e16f1eb5c.jpg",
  "snippet": "The Fat Cat Hypothesis - The New York Times",
  "context": "https://economix.blogs.nytimes.com/2010/05/17/the-fat-cat-hypothesis/"
},
{
  "url": "https://pre00.deviantart.net/b771/th/pre/i/2005/196/6/2/skunk_is_a_fat_cat__by_j_a_x.jpg",
  "snippet": "Skunk is a fat cat. by j-a-x on DeviantArt",
  "context": "https://j-a-x.deviantart.com/art/Skunk-is-a-fat-cat-20628033"
},
{
  "url": "https://media1.giphy.com/media/QhkdRrwjOCoiQ/200_s.gif",
  "snippet": "This is going to sound weird... | allkpop Forums",
  "context": "http://www.allkpop.com/forum/threads/this-is-going-to-sound-weird.72726/"
}
]
```
Example history usage
---------------------
`https://matts-img-search.glitch.me/api/latest/imagesearch/`

Example history output
----------------------
```
[
{
  "search": "fat cat",
  "when": "Wed Oct 18 2017 07:46:40 GMT+0000 (UTC)"
},
{
  "search": "goblin",
  "when": "Wed Oct 18 2017 07:46:46 GMT+0000 (UTC)"
},
{
  "search": "onion",
  "when": "Wed Oct 18 2017 07:47:06 GMT+0000 (UTC)"
},
{
  "search": "hippo",
  "when": "Wed Oct 18 2017 07:47:13 GMT+0000 (UTC)"
},
{
  "search": "elephant",
  "when": "Wed Oct 18 2017 07:47:36 GMT+0000 (UTC)"
},
{
  "search": "dog",
  "when": "Wed Oct 18 2017 07:47:40 GMT+0000 (UTC)"
},
{
  "search": "doggo",
  "when": "Wed Oct 18 2017 07:47:44 GMT+0000 (UTC)"
},
{
  "search": "doge",
  "when": "Wed Oct 18 2017 07:47:57 GMT+0000 (UTC)"
},
{
  "search": "fat cat",
  "when": "Wed Oct 18 2017 07:58:02 GMT+0000 (UTC)"
},
{
  "search": "fat cat",
  "when": "Wed Oct 18 2017 08:04:38 GMT+0000 (UTC)"
}
]
```

Made by [Matt K](https://github.com/yobananaboy)