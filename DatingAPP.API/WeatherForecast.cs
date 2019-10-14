using System;
using DatingAPP.API.Models;

namespace DatingAPP.API
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public Summary Summary { get; set; }
    }
}
