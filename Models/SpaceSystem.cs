namespace TestSystem.Models
{
    public class SpaceSystem
    {
        private List<SpaceObject> _spaceObjects = new();
        private string? _name;
        private ulong _age = 0;
        private SpaceObject? _centerOfGravity;
        public delegate void badSpaceObjectType(string message);
        public static event badSpaceObjectType? Notify;

        SpaceSystem(string name, ulong age, SpaceObject? centerOfGravity , SpaceObject[]? planets)
        {
            Name = name;
            Age = age;
            if(centerOfGravity != null) CenterOfGravity = centerOfGravity; 
            if(planets != null) Planets = planets.ToList();
        }
        SpaceSystem() { }


        public int Id { get; set; }
        public string Name 
        {
            get
            {
                return _name ?? string.Empty;
            }
            set
            { 
                _name = value; 
            }
        }
        public ulong Age    
        {
            get =>  _age;
            
            set 
            { 
                _age = value;
            }
        }
        public List<SpaceObject> Planets
        {
            get => _spaceObjects;
            set 
            { 
                _spaceObjects.AddRange(value.ToList());
            }
        }
        public SpaceObject? CenterOfGravity
        {
            get => _centerOfGravity;
            set 
            {
               switch (value?.Type)
                {
                    case "star":
                        _centerOfGravity = value;
                        break;
                    case "blachhole":
                        _centerOfGravity = value;
                        break;
                    default:
                        Notify?.Invoke("Wrong type of centerOfGravity");
                        break;
                }
            }
        }
    }
}
