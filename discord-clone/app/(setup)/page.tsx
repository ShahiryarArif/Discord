const SetupPage = async () => {
  const { data } = await getSetupData();
  return <SetupPage data={data} />;
}