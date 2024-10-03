export const DB = [
  {
    userId: 1,
    username: 'Bradleyortiz',
    name: 'Bradley Ortiz',
    bio: 'Tech enthusiast, coffee lover, and software engineer. Always exploring new ideas and trends in tech.',
    profilePicture: '/image_twitter/Profile-Photo.png',
    followersCount: 1200,
    followingCount: 800,
    tweets: [
      {
        tweetId: 1,
        content: `Excited to be working on a new React project! Loving the flexibility it provides for building UI components. #React #JavaScript #WebDevelopment`,
        createdAt: '20 Oct',
        likes: 150,
        retweets: 30,
        comments: 10,
        numberShare: 5,
        image: `https://img.freepik.com/photos-gratuite/collage-arriere-plan-programmation_23-2149901789.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid`,
      },
      {
        tweetId: 2,
        content: 'Just finished reading a great book on cloud computing. The future is all about scalability and efficiency. #CloudComputing #TechTrends',
        createdAt: '19 Mars',
        likes: 80,
        retweets: 20,
        comments: 5,
        numberShare: 2,
        image: ''
      },
      {
        tweetId: 3,
        content: `Coffee is the coder's fuel! Starting my day with a double shot and a fresh perspective. What’s your go-to morning routine? #CoffeeLovers #MorningRoutine`,
        createdAt: '20 Dec 2023',
        likes: 200,
        retweets: 50,
        comments: 15,
        numberShare: 10,
        image: ''
      },
      {
        tweetId: 4,
        content: 'Exploring the latest trends in AI. It’s fascinating how quickly things are evolving in this space. #ArtificialIntelligence #MachineLearning',
        createdAt: '2024-09-23T18:10:00Z',
        likes: 110,
        retweets: 40,
        comments: 12,
        numberShare: 8,
        image: ''
      },
    ],
    },  
    {
      userId: 2,
      username: 'john_doe',
      name: 'John Doe',
      bio:  'Tech enthusiast and coffee lover. Tweets about tech, travel, and life.',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      followersCount: 250,
      followingCount: 180,
      tweets: [
        {
          tweetId: 1,
          content: `Anyone else excited about the new React features? 🛠️ I've been experimenting with the latest updates, and I must say, the improvements in state management are a game-changer! Can’t wait to implement them in my current projects. #ReactJS #TechTalk #WebDev`,
          createdAt: '7h',
          likes: 25,
          retweets: 10,
          comments: 5,
          image: '/image_twitter/image-3.png',
          numberShare: 0,
        },
        {
          tweetId: 2,
          content:`Just launched my new project! Excited to share it with everyone. 🚀 It's been a long journey, but I'm finally here. I couldn't have done it without the amazing support from my friends and family. Stay tuned for more updates as I keep improving! #Launch #NewBeginnings #TechLife'`,
          createdAt: '29 sep',
          likes: 30,
          retweets: 5,
          comments: 2,
          numberShare: 0,
          image: ''
        },
        {
          tweetId: 3,
          content: 'Just finished a great book on JavaScript! Highly recommend. 📚 #BookLover',
          createdAt: '2024-09-28T10:00:00Z',
          likes: 18,
          retweets: 3,
          comments: 1,
          numberShare: 0,
          image: ''
        },
      ],
    },
    {
      userId: 3,
      username: 'jane_smith',
      name: 'Jane Smith',
      bio: 'Digital marketing specialist. Love to travel and take photos.',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
      followersCount: 300,
      followingCount: 150,
      tweets: [
        {
          tweetId: 1,
          content: `Just returned from a beautiful trip to Italy! 🇮🇹 The food, the culture, and the landscapes were absolutely breathtaking. Every corner felt like a scene from a movie. Can’t wait to go through all my photos and share them with you! Stay tuned! #TravelDiaries #ItalyTrip #Wanderlust`,
          createdAt: '2024-09-29T18:45:00Z',
          likes: 45,
          retweets: 15,
          comments: 7,
          numberShare: 0,
          image: ''
        },
        {
          tweetId: 2,
          content: 'Exploring new digital marketing trends for 2024! #Marketing',
          createdAt: '2024-09-27T14:30:00Z',
          likes: 28,
          retweets: 4,
          comments: 3,
          image: ''
        },
      ],
    },
    {
      userId: 4,
      username: 'mark_twain',
      name: 'Mark Twain',
      bio: 'Writer and storyteller. Sharing thoughts on literature and life.',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      followersCount: 200,
      followingCount: 100,
      tweets: [
        {
          tweetId: 1,
          content:`"A good book is a friend that never betrays. 📚 Reading has been my escape, my teacher, and my inspiration. I just finished another classic, and I can’t recommend it enough. Who else loves getting lost in a good story? #BookLove #ReadingCommunity #Wisdom`,
          createdAt: '2024-09-25T10:15:00Z',
          likes: 20,
          retweets: 5,
          comments: 3,
          image: 'https://img.freepik.com/photos-gratuite/livre-bibliotheque-manuel-ouvert_1150-5922.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid',
        },
        {
          tweetId: 2,
          content: 'Writing is easy. All you have to do is cross out the wrong words. #Writing',
          createdAt: '2024-09-23T12:00:00Z',
          likes: 15,
          retweets: 2,
          comments: 1,
          image: ''
        },
        {
          tweetId: 3,
          content: 'Let us be thankful for the fools. But for them, the rest of us could not succeed. #Wisdom',
          createdAt: '2024-09-21T09:00:00Z',
          likes: 10,
          retweets: 1,
          comments: 0,
          image: ''
        },
      ],
    },
    {
      userId: 5,
      username: 'sara_lee',
      name: 'Sara Lee',
      bio: 'Food blogger and recipe creator. Sharing my culinary adventures!',
      profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
      followersCount: 450,
      followingCount: 300,
      tweets: [
        {
          tweetId: 1,
          content: 'Tried a new recipe today! Check out my blog for the details. 🍽️ #Foodie',
          createdAt: '2024-09-28T13:00:00Z',
          likes: 60,
          retweets: 20,
          comments: 10,
          image: ''
        },
        {
          tweetId: 2,
          content: `Tried a new recipe today! 🍽️ It’s a mix of traditional flavors with a modern twist, perfect for any food lover. Head to my blog for the full details and let me know what you think if you give it a try! #Foodie #RecipeShare #CookingAdventures`,
          createdAt: '2024-09-26T14:00:00Z',
          likes: 50,
          retweets: 15,
          comments: 8,
          image: ''
        },
        {
          tweetId: 3,
          content: 'Can’t wait to share my favorite fall recipes! 🍁 #FallCooking',
          createdAt: '2024-09-24T16:30:00Z',
          likes: 40,
          retweets: 12,
          comments: 4,
          image: ''
        },
      ],
    },
    {
      userId: 6,
      username: 'alice_wonder',
      name: 'Alice Wonderland',
      bio: 'Dreamer and artist. Exploring creativity in everyday life.',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      followersCount: 500,
      followingCount: 400,
      tweets: [
        {
          tweetId: 1,
          content: 'Creating art is like dreaming with colors. 🎨 #ArtLife',
          createdAt: '2024-09-26T14:30:00Z',
          likes: 35,
          retweets: 8,
          comments: 4,
          image: ''
        },
        {
          tweetId: 2,
          content: 'Art is not freedom from discipline, but disciplined freedom. #ArtQuotes',
          createdAt: '2024-09-24T11:15:00Z',
          likes: 20,
          retweets: 5,
          comments: 2,
          image: ''
        },
        {
          tweetId: 3,
          content: 'Just finished a new painting! Can’t wait to show it off! #ArtCommunity',
          createdAt: '2024-09-22T13:30:00Z',
          likes: 30,
          retweets: 6,
          comments: 3,
          image: 'https://img.freepik.com/photos-gratuite/vue-laterale-homme-peignant-toile_23-2150170491.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid',
          numberShare: 0
        },
      ],
    },
    {
      userId: 7,
      username: 'charlie_brown',
      name: 'Charlie Brown',
      bio: 'Aspiring musician. Love to share my journey in music.',
      profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
      followersCount: 100,
      followingCount: 75,
      tweets: [
        {
          tweetId: 1,
          content: 'Just finished writing a new song! Can’t wait to share it! 🎶 #MusicLife',
          createdAt: '2024-09-24T16:00:00Z',
          likes: 18,
          retweets: 4,
          comments: 1,
          image: ''
        },
        {
          tweetId: 2,
          content: 'Music is the shorthand of emotion. 🎵 #MusicQuote',
          createdAt: '2024-09-22T09:00:00Z',
          likes: 12,
          retweets: 3,
          comments: 0,
          image: ''
        },
      ],
    },
    {
      userId: 8,
      username: 'david_brown',
      name: 'David Brown',
      bio: 'Gadget lover and tech reviewer. Sharing insights on the latest tech.',
      profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg',
      followersCount: 275,
      followingCount: 125,
      tweets: [
        {
          tweetId: 1,
          content: 'Just got my hands on the latest smartphone! Review coming soon. 📱 #TechReview',
          createdAt: '2024-09-23T11:00:00Z',
          likes: 30,
          retweets: 10,
          comments: 5,
          numberShare: 0,
          image : ''
        },
        {
          tweetId: 2,
          content: 'Can’t believe how fast technology is evolving! #FutureTech',
          createdAt: '2024-09-21T14:30:00Z',
          likes: 20,
          retweets: 8,
          comments: 2,
          numberShare: 0,
          image: ''
        },
      ],
    },
    {
      userId: 9,
      username: 'emma_stone',
      name: 'Emma Stone',
      bio: 'Nature lover and photographer. Capturing the beauty of the world.',
      profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg',
      followersCount: 600,
      followingCount: 300,
      tweets: [
        {
          tweetId: 1,
          content: `The beauty of nature never ceases to amaze me! 🌲 Whether it's the tall trees, flowing rivers, or the chirping birds, there's always something peaceful and grounding about being outside. Here's one of my favorite shots from my latest hike. #NaturePhotography #OutdoorLife`,
          createdAt: '2024-09-22T09:45:00Z',
          likes: 80,
          retweets: 25,
          comments: 12,
          image: '/image_twitter/image-3.png'
        },
        {
          tweetId: 2,
          content: 'Nature is the art of God. 🌼 #NatureLover',
          createdAt: '2024-09-20T14:00:00Z',
          likes: 50,
          retweets: 10,
          comments: 5,
          image: ''
        },
        {
          tweetId: 3,
          content: `Nature is the art of God. 🌼 Every time I look through my lens, I’m reminded of how much beauty there is in the little things. #NatureLover #Photography #Inspiration`,
          createdAt: '2024-09-18T10:30:00Z',
          likes: 40,
          retweets: 15,
          comments: 8,
          numberShare: 0,
          image: 'https://img.freepik.com/photos-gratuite/vue-photorealiste-arbre-dans-nature-branches-tronc_23-2151478039.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid'
        },
      ],
    },
  ];
  
  