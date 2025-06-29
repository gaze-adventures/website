"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, X } from "lucide-react"

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])

  const difficulties = [
    { id: "easy", label: "Easy", count: 8 },
    { id: "moderate", label: "Moderate", count: 12 },
    { id: "challenging", label: "Challenging", count: 6 },
    { id: "extreme", label: "Extreme", count: 3 },
  ]

  const durations = [
    { id: "1-3", label: "1-3 Days", count: 5 },
    { id: "4-7", label: "4-7 Days", count: 8 },
    { id: "8-14", label: "8-14 Days", count: 10 },
    { id: "15+", label: "15+ Days", count: 6 },
  ]

  const destinations = [
    { id: "hunza", label: "Hunza Valley", count: 4 },
    { id: "skardu", label: "Skardu", count: 6 },
    { id: "karakoram", label: "Karakoram", count: 3 },
    { id: "nepal", label: "Nepal", count: 5 },
    { id: "norway", label: "Norway", count: 4 },
    { id: "alps", label: "French Alps", count: 3 },
  ]

  const handleDifficultyChange = (difficultyId: string, checked: boolean) => {
    if (checked) {
      setSelectedDifficulties([...selectedDifficulties, difficultyId])
    } else {
      setSelectedDifficulties(selectedDifficulties.filter((id) => id !== difficultyId))
    }
  }

  const handleDurationChange = (durationId: string, checked: boolean) => {
    if (checked) {
      setSelectedDurations([...selectedDurations, durationId])
    } else {
      setSelectedDurations(selectedDurations.filter((id) => id !== durationId))
    }
  }

  const handleDestinationChange = (destinationId: string, checked: boolean) => {
    if (checked) {
      setSelectedDestinations([...selectedDestinations, destinationId])
    } else {
      setSelectedDestinations(selectedDestinations.filter((id) => id !== destinationId))
    }
  }

  const clearAllFilters = () => {
    setPriceRange([0, 3000])
    setSelectedDifficulties([])
    setSelectedDurations([])
    setSelectedDestinations([])
  }

  const activeFiltersCount = selectedDifficulties.length + selectedDurations.length + selectedDestinations.length

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-blue-600" />
              Filters
            </div>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {activeFiltersCount}
              </Badge>
            )}
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-gray-700 p-0 h-auto font-normal"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          )}
        </CardHeader>
      </Card>

      {/* Price Range */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={3000} min={0} step={50} className="w-full" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Level */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Difficulty Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {difficulties.map((difficulty) => (
            <div key={difficulty.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={difficulty.id}
                  checked={selectedDifficulties.includes(difficulty.id)}
                  onCheckedChange={(checked) => handleDifficultyChange(difficulty.id, checked as boolean)}
                />
                <label htmlFor={difficulty.id} className="text-sm font-medium cursor-pointer">
                  {difficulty.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({difficulty.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <div key={duration.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={duration.id}
                  checked={selectedDurations.includes(duration.id)}
                  onCheckedChange={(checked) => handleDurationChange(duration.id, checked as boolean)}
                />
                <label htmlFor={duration.id} className="text-sm font-medium cursor-pointer">
                  {duration.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({duration.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Destinations */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Destinations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {destinations.map((destination) => (
            <div key={destination.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={destination.id}
                  checked={selectedDestinations.includes(destination.id)}
                  onCheckedChange={(checked) => handleDestinationChange(destination.id, checked as boolean)}
                />
                <label htmlFor={destination.id} className="text-sm font-medium cursor-pointer">
                  {destination.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({destination.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Apply Filters Button */}
      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300">
        Apply Filters
      </Button>
    </div>
  )
}
