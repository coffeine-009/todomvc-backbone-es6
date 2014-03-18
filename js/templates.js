import {Provide} from './di/annotations';

@Provide('itemTemplate')
export function createItemTemplate() {
  return _.template($('#item-template').html());
}

@Provide('statsTemplate')
export function createStatsTemplate() {
  return _.template($('#stats-template').html());
}