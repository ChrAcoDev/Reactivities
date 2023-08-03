import { FC } from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  isEditing: boolean;
  activities: Activity[];
  selectedActivity: Activity | undefined;
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
  handleFormOpen: (id: string) => void;
  handleFormClose: () => void;
  handleCreateEditActivity: (activity: Activity) => void;
  handleDeleteActivity: (id: string) => void;
}

const ActivityDashboard: FC<Props> = ({
  activities,
  selectedActivity,
  handleSelectActivity,
  handleCancelSelectActivity,
  isEditing,
  handleFormClose,
  handleFormOpen,
  handleCreateEditActivity,
  handleDeleteActivity,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !isEditing && (
          <ActivityDetails
            activity={selectedActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            handleFormOpen={handleFormOpen}
          />
        )}
        {isEditing && (
          <ActivityForm
            handleFormClose={handleFormClose}
            handleCreateEditActivity={handleCreateEditActivity}
            selectedActivity={selectedActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
