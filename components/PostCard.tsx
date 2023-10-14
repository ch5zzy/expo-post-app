import React from 'react';
import {PostData} from '../types/PostData';
import {Text, Card} from 'react-native-paper';

export function PostCard(props: {data: PostData; onClick: () => void}) {
  return (
    <Card onPress={() => props.onClick()} style={{margin: 10}}>
      <Card.Title
        title={props.data.title}
        titleVariant="titleMedium"
        titleNumberOfLines={2}
      />
      <Card.Content>
        <Text variant="titleSmall">Post ID: {props.data.id}</Text>
        <Text>{props.data.body}</Text>
      </Card.Content>
    </Card>
  );
}
