function App() {
    const [refreshNodes, setRefreshNodes] = useState([]);
  
    const handleRefreshNodes = nodes => {
      setRefreshNodes(nodes);
    };
  
    return (
      <div>
        <AntdTree fetchData={fetchData} refreshNodes={refreshNodes} />
        <button onClick={() => fetchData()}>Refresh Tree</button>
        <button onClick={() => handleRefreshNodes(['node1', 'node2'])}>
          Refresh Selected Nodes
        </button>
      </div>
    );
  }
  
  function AntdTree(props) {
    const { fetchData, refreshNodes } = props;
  
    useEffect(() => {
      fetchData();
    }, []);
  
  
    const handleRefreshNodes = async () => {
      const response = await axios.get('/api/tree');
      setTreeData(response.data);
    };
  
    useEffect(() => {
      if (refreshNodes.length > 0) {
        handleRefreshNodes();
      }
    }, [refreshNodes]);
  
    ...
  }
  