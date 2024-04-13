import { useState, useEffect } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text, Badge } from "@chakra-ui/react";

const Index = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const mockLeaderboardData = [
      { id: 1, name: "John Doe", level: 10, points: 5000, company: "Acme Inc." },
      { id: 2, name: "Jane Smith", level: 8, points: 3500, company: "XYZ Corp" },
      { id: 3, name: "Bob Johnson", level: 12, points: 7200, company: "ABC Ltd." },
    ];

    const fetchLeaderboard = () => {
      const formattedData = mockLeaderboardData.map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }));
      setLeaderboard(formattedData);
    };

    fetchLeaderboard();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Leaderboard
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Avatar</Th>
            <Th>Name</Th>
            <Th>Level</Th>
            <Th>Points</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leaderboard.map((entry) => (
            <Tr key={entry.id}>
              <Td>
                <Badge colorScheme="purple">{entry.rank}</Badge>
              </Td>
              <Td>
                <Avatar size="sm" src={`https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAwNDczNHww&ixlib=rb-4.0.3&q=80&w=1080`} />
              </Td>
              <Td>
                <Text fontWeight="bold">{entry.name}</Text>
              </Td>
              <Td>{entry.level}</Td>
              <Td>{entry.points}</Td>
              <Td>{entry.company}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
