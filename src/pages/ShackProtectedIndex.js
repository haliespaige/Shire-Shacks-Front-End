import React from "react";
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const ShackProtectedIndex = ({ currentUser, shacks }) => {
    const myShacks = shacks?.filter(
      (shack) => currentUser?.id === shack.user_id
    );

      console.log("Current user: ", currentUser);
      console.log();

    return (
      <div data-testid="shackprotectedindex">
        <h3>My Shacks</h3>

        <CardGroup className="shack-card">
          {myShacks?.map((shack, index) => {
            return (
              <Card key={index}>
                <CardImg
                  className="card-image"
                  alt="where dreams dwell in cozy earthy abodes"
                  src={shack.image}
                  top
                  width="50%"
                />
                <CardBody>
                  <CardTitle tag="h5">Located in {shack.hill}</CardTitle>
                  <Button>More Details</Button>
                </CardBody>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    );
  };

export default ShackProtectedIndex;
