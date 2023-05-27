namespace TestSystem.Models
{
    public class SpaceObject
    {
        private string? _type;
        private string? _name;
        private ulong _age = 0;
        private uint _diameter = 0;
        private uint _weight = 0;

        SpaceObject() { }
        SpaceObject(string type, string name, ulong age, uint diametr, uint weight)
        {
            Type = type;
            Name = name;
            Age = age;
            Diameter = diametr;
            Weight = weight;
        }

        public int Id { get; set; }
        public List<SpaceSystem> SpaceSystem = new();
        public string? Type 
        { 
            get { return _type; }
            set { if (value != null) _type = value.Trim().ToLower(); }
        }
        public string? Name
        {
            get =>  _name;
            
            set { if (value != null) _name = value; }
        }
        public ulong Age
        {
            get => _age;
            set { _age = value; }
        }

        public uint Diameter
        {
            get => _diameter; 
            set { _diameter = value; }
        }
        public uint Weight
        {
            get => _weight;
            set { _weight = value; }
        }
    }
}
