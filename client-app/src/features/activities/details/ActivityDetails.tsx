import { FC } from "react";
import { Activity } from "../../../app/models/Activity";
import { Button, Card, Image } from "semantic-ui-react";

interface Props {
  activity: Activity;
  handleCancelSelectActivity: () => void;
  handleFormOpen: (id: string) => void;
}

const ActivityDetails: FC<Props> = ({
  activity,
  handleCancelSelectActivity,
  handleFormOpen,
}: Props) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => {
              handleFormOpen(activity.id);
            }}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={handleCancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
