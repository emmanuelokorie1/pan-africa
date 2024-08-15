// src/components/Timeline.tsx
import React from 'react';
import styled from 'styled-components';

// Define types for props
interface TimelineItemProps {
  left?: boolean;
}

interface Event {
  date: string;
  description: string;
  left: boolean;
}

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  padding: 20px 0;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e75425;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div<TimelineItemProps>`
  display: flex;
  justify-content: ${(props) => (props.left ? 'flex-start' : 'flex-end')};
  margin-bottom: 20px;
  position: relative;
  width: 50%;
  padding: 10px 20px;
  background: #fff;
  border: 2px solid #e75425;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #e75425;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${(props) =>
      props.left ? 'right: -8px;' : 'left: -8px;'}
  }
`;

const DateText = styled.div`
  font-weight: bold;
  color: #e75425;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 16px;
`;

const Timeline: React.FC = () => {
  const events: Event[] = [
    { date: '2020-01-01', description: 'Event 1', left: true },
    { date: '2020-06-01', description: 'Event 2', left: false },
    { date: '2021-01-01', description: 'Event 3', left: true },
    { date: '2021-06-01', description: 'Event 4', left: false },
  ];

  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index} left={event.left}>
          <DateText>{event.date}</DateText>
          <Description>{event.description}</Description>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
