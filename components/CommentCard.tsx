import React from 'react';
import {CommentData} from '../types/CommentData';
import {Text, Card} from 'react-native-paper';

export function CommentCard(props: {data: CommentData}) {
  return (
    <Card style={{margin: 10}}>
      <Card.Title title={props.data.name} titleVariant="titleMedium" />
      <Card.Content>
        <Text variant="titleSmall">Comment ID: {props.data.id}</Text>
        <Text>{props.data.body}</Text>
      </Card.Content>
    </Card>
  );
}
