using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Models
{
    public class ChartModel
    {
        public string skill { get; set; }
        public int value { get; set; }
    }

    public class RaceChartModel
    {
        public _2003[] _2003 { get; set; }
        public _2004[] _2004 { get; set; }
        public _2005[] _2005 { get; set; }
        public _2006[] _2006 { get; set; }
        public _2007[] _2007 { get; set; }
        public _2008[] _2008 { get; set; }
        public _2009[] _2009 { get; set; }
        public _2010[] _2010 { get; set; }
        public _2011[] _2011 { get; set; }
        public _2012[] _2012 { get; set; }
        public _2013[] _2013 { get; set; }
        public _2014[] _2014 { get; set; }
        public _2015[] _2015 { get; set; }
        public _2016[] _2016 { get; set; }
        public _2017[] _2017 { get; set; }
        public _2018[] _2018 { get; set; }
    }

    public class _2003
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2004
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2005
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2006
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2007
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2008
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2009
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2010
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2011
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2012
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2013
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2014
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2015
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2016
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2017
    {
        public string network { get; set; }
        public int MAU { get; set; }
    }

    public class _2018
    {
        public string network { get; set; }
        public long MAU { get; set; }
    }

}
