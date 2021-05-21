import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchDateObjects } from '../../redux/actions/date';
import { set } from 'react-native-reanimated';
import CalendarHeatmap from 'react-native-calendar-heatmap';

export function ScoreScreen() {
  const dispatch = useDispatch();
  const [dates, setDates] = useState([]);
  const dateState = useSelector(state => { return state.date }, shallowEqual)
  useEffect(() => {
    dispatch(fetchDateObjects())
  }, [])
  useEffect(() => {
    setDates(dateState)
  }, [dateState])
  // const today = new Date;
  // const endDateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // const startDateString = today.getFullYear() + '-' + (today.getMonth() - 2) + '-' + today.getDate();
  const renderHeatmap = () => {
    const { isLoading } = dates;
    if (!isLoading && dates.hasOwnProperty("dates")) {
      const heatmapValues = dates.dates.map(obj => {
        const count = Object.values(obj.tasks).reduce((a, b) => a + b)
        const date = obj.date.split("-").map((ele, idx) => {
          if (idx !== 0) {
            return ele.length === 2 ? ele : "0" + ele
          } else {
            return ele;
          }
        }).join("-")
        return ({
          date: date,
          count: count
        })
      })
      const totalAchievements = heatmapValues.reduce((a, b) => { return a + b.count }, 0)
      // console.log(heatmapValues)
      console.log(totalAchievements)
      return (
        <>

          <View><Text>{`Total Achievements: ${totalAchievements}`}</Text></View>
          <CalendarHeatmap
            endDate={new Date}
            numDays={100}
            colorArray={["#A2D5F2", "#93B5E1", "#40A8C4", "#07689F", "#120136"]}

            values={heatmapValues}
          />
        </>
      )
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Score</Text>
      {renderHeatmap()}
    </View>
  );
}
