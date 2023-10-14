import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PostData} from './types/PostData';
import {CommentData} from './types/CommentData';
import {PostCard} from './components/PostCard';
import {CommentCard} from './components/CommentCard';
import {Text, Appbar} from 'react-native-paper';

function App() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [currPost, setCurrPost] = useState(1);
  const [comments, setComments] = useState<CommentData[]>([]);

  // Fetch the first 10 posts on render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)));
  }, []);

  // Fetch comments on comment update
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + currPost)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [currPost]);

  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.Content title="Feed" />
      </Appbar.Header>
      <ScrollView>
        <Text variant="headlineLarge" style={{paddingLeft: 10}}>
          Posts
        </Text>
        {posts.map(post => {
          return <PostCard data={post} onClick={() => setCurrPost(post.id)} key={post.id} />;
        })}
        <Text variant="headlineMedium" style={{paddingLeft: 10}}>
          Comments for post {currPost}
        </Text>
        {comments.map(comment => {
          return <CommentCard data={comment} key={comment.id} />;
        })}
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
