export const GetDashboard = (req, res) => {
  const dashboardData = {
    Orders: {
      category: "Total Bookings",
      total: 1200,
      thisMonth: {
        value: 1129,
        percentage: 1.5
      },
      thisWeek: {
        value: 69,
        percentage: 1.5
      }
    },
    Revenue: {
      category: "Total Revenue",
      total: 7483,
      thisMonth: {
        value: 2150,
        percentage: 1.5
      },
      thisWeek: {
        value: 6150,
        percentage: 1.5
      }
    },
  }
  return res.json({ msg: 'Successfully got the data', dashboardData })

}