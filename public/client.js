// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  var searchOutput =   [
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
            ];
  
  var historyOutput = [
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
            ];
  
  $("#search-output").html(JSON.stringify(searchOutput, undefined, 2));
  $("#history-output").html(JSON.stringify(historyOutput, undefined, 2));
});
