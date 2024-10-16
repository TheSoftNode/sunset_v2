export const determineRecommendation = (selectedOptions) =>
{
  const floors = selectedOptions[0];
  const roomsPerFloor = selectedOptions[1];
  const realTimeControl = selectedOptions[2];
  const optimization = selectedOptions[3];
  const support = selectedOptions[4];

  let hubs = 0;
  let globalThermostats = 0;
  let trvs = 0;
  let plan = '';

  // Determine number of hubs and global thermostats based on floors
  switch (floors)
  {
    case 0: hubs = globalThermostats = 1; break;
    case 1: hubs = globalThermostats = 2; break;
    case 2: hubs = globalThermostats = 3; break;
    case 3: hubs = globalThermostats = 4; break;
    case 4: hubs = globalThermostats = 5; break;
    default: hubs = globalThermostats = 5;
  }

  // Determine number of TRVs based on floors and rooms per floor
  trvs = (floors + 1) * (roomsPerFloor + 1);

  // Determine plan based on real-time control and optimization
  if (realTimeControl === 0 && optimization === 0)
  {
    plan = 'Basic';
  } else if (realTimeControl === 1 && optimization === 1)
  {
    plan = 'Standard';
  } else if (realTimeControl === 1 && optimization === 2)
  {
    plan = 'Premium';
  }

  return {
    products: {
      1: globalThermostats, // Global Thermostat
      2: hubs, // IoT Hub
      3: trvs // TRVs
    },
    plan: plan
  };
};