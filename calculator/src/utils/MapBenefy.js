export function MapBenefy(data) {
  let users = [];
  data.categories.forEach(item => {
    const cat = item.name;
    item.beneficiaries.forEach(beneficary => {
      if (beneficary.firstName !== undefined) {
        users.push({
          id: beneficary.id,
          fullName: beneficary.firstName + " " + beneficary.lastName,
          category: cat
        });
      }
    });
  });
  return users;
}
